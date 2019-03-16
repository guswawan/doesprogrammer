var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: String,
    phone: String,
    email: String,
    balance: Number,
    verified: Boolean,
    vouchers: [{
        code: {
            type: String,
            unique: true,
            required: true
        },
        amount: Number,
        expired: {
            type: Date,
            default: Date.now
        },
        receiver: String,
        claimed: Boolean
    }]
});

module.exports = mongoose.model('User', UserSchema);