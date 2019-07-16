var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var VoucherSchema = new Schema({

	code: {type: String, unique: true, required: true},
    amount: {type: Number, required: true},
    expired: {type: Date, default: moment().add(30, 'days').calendar(), required: true},
    receiver_id: {type: String},
    claimed: {type: Boolean, default: false}

});

module.exports = mongoose.model('Voucher', VoucherSchema);