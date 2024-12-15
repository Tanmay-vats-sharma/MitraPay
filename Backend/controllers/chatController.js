const User = require("../models/user");
const Contact = require("../models/contact");
const Message = require("../models/message");

const ApiError = require("../utils/ApiError");

const getContacts = async (req, res, next) => {
  const { email } = req.user;

  try {
    const user = await User.findOne({ email }).populate({
      path: "contacts",
      populate: [
        {path: "participants", select: "name Phone_no profile_pic"}
      ]
    });

    if (!user) {
      return next(new ApiError(404, "User not found"));
    }

    res.status(200).json({ contacts: user.contacts });

  } catch (error) {
    return next(error);
  }
}

const createContact = async (req, res, next) => {
  const { email } = req.user;
  const { contactEmail, Phone_no } = req.body;

  try {
    const user = await User.findOne({ email });
    const friend = await User.findOne({
      $or: [
        { email: contactEmail },
        { Phone_no: Phone_no },
      ]
    });

    if (!user || !friend) {
      return next(new ApiError(404, "User not found"));
    }

    const existingContact = await Contact.findOne({
      participants: { $all: [user._id, friend._id] },
    });

    if (existingContact) {
      return next(new ApiError(400, "Contact already exists"));
    }
    const contact = await Contact.create({
      participants: [user._id, friend._id],
    });

    user.contacts.push(contact._id);
    friend.contacts.push(contact._id);

    await user.save();
    await friend.save();

    await contact.populate('participants', 'name email Phone_no');

    res.status(201).json({
      message: "Contact created successfully!",
      contact,
      status: "success",
    });

  } catch (error) {
    return next(error);
  }
}

const getMessages = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const {email} = req.user;

    const user = await User.findOne({ email });

    if (!user) {
      return next(new ApiError(404, "User not found"));
    }

    const contact = await Contact.findById(contactId).populate("participants");

    if (!contact) {
      return next(new ApiError(404, "Contact not found"));
    }

    const isParticipant = contact.participants.some(
      (participant) => participant._id.toString() === user._id.toString()
    );

    if (!isParticipant) {
      return next(new ApiError(403, "Access denied"));
    }

    await contact.populate({
      path: "messages",
      populate: [
        {path: "sender", select: "name profile_pic Phone_no"},
        {path: "receiver", select: "name profile_pic Phone_no"},
      ]
    });

    const messages = contact.messages;

    // Return messages with user details
    res.status(200).json({
      messages,
      contact,
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

const sendMessage = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { content } = req.body;
    const {email} = req.user;

    console.log(email);
    const user = await User.findOne({email});
    console.log(user);
    if (!user) {
      return next(new ApiError(404, "User not found"));
    }

    const contact = await Contact.findById(contactId).populate("participants");

    if (!contact) {
      return next(new ApiError(404, "Contact not found"));
    }

    const isParticipant = contact.participants.some(
      (participant) => participant._id.toString() === user._id.toString()
    );

    if (!isParticipant) {
      return next(new ApiError(403, "Access denied"));
    }

    const newMessage = await Message.create({
      sender: user._id,
      receiver: contact.participants.find(
        (participant) => participant._id.toString() !== user._id.toString()
      ),
      content,
    });

    contact.messages.push(newMessage._id);
    await contact.save();

    res.status(201).json({ message: "Message sent", newMessage, status: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getContacts, getMessages, sendMessage, createContact };