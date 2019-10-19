var mongoose = require('mongoose');
var moment = require('moment');


var VoucherSchema = new mongoose.Schema({
    code: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    expired: {
        type: Date,
        default: moment().add(30, 'days').calendar(),
        required: true
    },
    receiver: {
        type: String
    },
    claimed: {
        type: Boolean,
        default: false
    }

});


module.exports = mongoose.model('Voucher', VoucherSchema);