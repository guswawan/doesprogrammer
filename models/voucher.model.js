var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoucherSchema = new Schema({

	code: {type: String, unique: true, required: true},
    amount: {type: Number, required: true},
    expired: {type: Date, required: true},
    type: {type: Date, default: Date.now, required: true},
    receiver: {type: String},
    claimed: {type: Boolean}

});

module.exports = mongoose.model('Voucher', VoucherSchema);