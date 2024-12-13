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

    res.status(201).json({
      message: "Contact created successfully!",
      contact,
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
      return res.status(404).json({ message: "User not found" });
    }

    const contact = await Contact.findById(contactId).populate("participants");

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    const isParticipant = contact.participants.some(
      (participant) => participant._id.toString() === user._id.toString()
    );

    if (!isParticipant) {
      return res.status(403).json({ message: "Access denied" });
    }

    const messages = await Message.find({
      $or: [
        { sender: { $in: contact.participants } },
        { receiver: { $in: contact.participants } },
      ],
    }).populate("sender receiver", "name profile_pic");

    // Return messages with user details
    res.status(200).json({
      messages,
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    next(error);
  }
};

const sendMessage = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { content } = req.body;
    const email = req.user;

    const user = await User.findOne( email );
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const contact = await Contact.findById(contactId).populate("participants");

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    const isParticipant = contact.participants.some(
      (participant) => participant._id.toString() === user._id.toString()
    );

    if (!isParticipant) {
      return res.status(403).json({ message: "Access denied" });
    }

    const newMessage = await Message.create({
      sender: user._id,
      receiver: contact.participants.find(
        (participant) => participant._id.toString() !== user._id.toString()
      ),
      content,
    });

    res.status(201).json({ message: "Message sent", newMessage });
  } catch (error) {
    console.error("Error sending message:", error);
    next(error);
  }
};

module.exports = { getContacts, getMessages, sendMessage, createContact };