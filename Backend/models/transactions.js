const mongoose = require('mongoose');

let transactionSchema = mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('transaction', transactionSchema);