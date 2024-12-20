const User = require("../models/user");
const Transaction = require("../models/transactions");
const wallet = require("../models/wallet");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const ApiError = require("../utils/ApiError");

const viewTransactions = async (req, res, next) => {
    const { email } = req.user;

    try {
        const user = await User.findOne({ email }).populate({
            path: "transactions",
            options: { sort: { createdAt: -1 } },
            populate: [
                { path: "from", select: "name Phone_no profile_pic" },
                { path: "to", select: "name Phone_no profile_pic" }
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
        if(amount <= 0){
            return next(new ApiError(400, "Amount should be greater than 0"));
        }
        const sender = await User.findOne({ email: sender_email }).populate("wallet");
        console.log("sender:", sender);
        const receiver = await User.findOne({
            $or: [
                { email: email },
                { Phone_no: Phone_no }
            ],
        }).populate("wallet");
        console.log("Reciever: ", receiver);

        if (!sender || !receiver) {
            return next(new ApiError(404, "User not found"));
        }

        if (sender.wallet.balance < amount) {
            return next(new ApiError(400, "Insufficient balance"));
        }

        const senderWallet = sender.wallet;
        const receiverWallet = receiver.wallet;

        await wallet.findOneAndUpdate(
            { _id: senderWallet._id },
            { $inc: { balance: -amount } },
            { upsert: true }
        );

        // Increment receiver's wallet balance
        await wallet.findOneAndUpdate(
            { _id: receiverWallet._id },
            { $inc: { balance: amount } },
            { upsert: true }
        );

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

const addMoney = async (req, res, next) => {
    const { email } = req.user;
    const { amount } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ApiError(404, "User not found"));
        }
        // Create Razorpay order
        const options = {
            amount: amount * 100, // Amount in paise
            currency: 'INR',
            receipt: `${user._id}_${Date.now()}`,
            payment_capture: 1,
            notes: {
                walletId: user.wallet,
            }
        };

        const order = await razorpay.orders.create(options);

        res.status(200).json({
            success: true,
            orderId: order.id,
            amount: options.amount
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const paymentWebhook = async (req, res, next) => {
    const secret = process.env.RAZORPAY_KEY_SECRET;

    const signature = req.headers['x-razorpay-signature'];
    const body = JSON.stringify(req.body);

    try {
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(body)
            .digest('hex');

        if (signature !== expectedSignature) {
            return next(new ApiError(400, 'Invalid signature'));
        }

        console.log("Webhook received");

        const { event, payload } = req.body;

        if (event === 'payment.captured') {
            const payment = payload.payment.entity;
            const amount = payment.amount / 100; // Convert paise to INR
            const walletId = payment.notes.walletId; // Assuming walletId is passed as metadata

            // Update user's wallet balance
            const WALLET = await wallet.findOneAndUpdate(
                { _id: walletId },
                { $inc: { balance: amount } },
                { upsert: true }
            );

            if (!WALLET) {
                return next(new ApiError(404, 'Wallet not found'));
            }
        }

        res.status(200).send('Webhook received');
    }
    catch (error) {
        next(error);
    }
};


module.exports = { payMoney, viewTransactions, addMoney, paymentWebhook };