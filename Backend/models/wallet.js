const mongoose = require('mongoose');

let walletSchema = mongoose.Schema({
    balance: {
        type: Number,
        required: true,
    },
}, { 
    timestamps: true,
    toJSON: { 
        transform: (doc, ret) => {
            delete ret._id; 
            delete ret.__v; 
            return ret;
        },
    }
});

module.exports = mongoose.model('wallet', walletSchema);