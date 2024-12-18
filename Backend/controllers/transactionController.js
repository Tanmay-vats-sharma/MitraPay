const User = require("../models/user");
const Transaction = require("../models/transactions");
const wallet = require("../models/wallet");

const ApiError = require("../utils/ApiError");

const viewTransactions = async (req, res, next) => {
    const { email } = req.user;
    
    try {
        const user = await User.findOne({ email }).populate({
            path : "transactions",
            options: { sort: { createdAt: -1 } },
            populate: [
                {path: "from", select: "name Phone_no profile_pic"},
                {path: "to", select: "name Phone_no profile_pic"}
            ]
        });

        if (!user) {
            return next(new ApiError(404, "User not found"));
        }

        res.status(200).json({ 
            transactions: user.transactions,
            status: "success",
        });
    }
    catch (error) {
        return next(error);
    }
}

const payMoney = async (req, res, next) => {
  const { email: sender_email } = req.user;
  const { amount, email, Phone_no } = req.body;

  try {
    console.log(sender_email);
    const sender = await User.findOne({ email: sender_email }).populate("wallet");
    console.log("sender:",sender);
    const receiver = await User.findOne({ 
        $or: [
            { email: email }, 
            { Phone_no: Phone_no }
        ],
    }).populate("wallet");
    console.log("Reciever: ",receiver);

    if (!sender || !receiver) {
        return next(new ApiError(404, "User not found"));
    }

    if (sender.wallet.balance < amount) {
        return next(new ApiError(400, "Insufficient balance"));
    }

    const senderWallet = sender.wallet;
    const receiverWallet = receiver.wallet;

    senderWallet.balance -= amount;
    receiverWallet.balance += amount;

    await senderWallet.save();
    await receiverWallet.save();

    const transaction = await Transaction.create({
        from: sender._id,
        to: receiver._id,
        amount,
    });

    sender.transactions.push(transaction._id);
    receiver.transactions.push(transaction._id);

    transaction.populate("from to");

    await sender.save();
    await receiver.save();

    res.status(200).json({
        message: "Money sent successfully",
        balance: senderWallet.balance,
        status: "success",
        transaction,
    });
    }
    catch (error) {
        return next(error);
    }
}

module.exports = { payMoney, viewTransactions };