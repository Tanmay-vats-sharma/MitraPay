const mongoose = require('mongoose');

let walletSchema = mongoose.Schema({
    balance: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('wallet', walletSchema);