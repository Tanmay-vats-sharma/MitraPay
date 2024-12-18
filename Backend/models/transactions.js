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

module.exports = mongoose.model('transaction', transactionSchema);