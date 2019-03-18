var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoucherSchema = new Schema({
    code: {
        type: String,
        unique: true
    },
    amount: String,
    expired: {
        type: Date,
        default: Date.now()
    },
    receiver: String,
    claimed: Boolean
})

module.exports = mongoose.model('Voucher', VoucherSchema);