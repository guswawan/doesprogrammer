var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var VoucherSchema = new Schema({

<<<<<<< HEAD
	code: {type: String, unique: true, required: true},
    amount: {type: Number, required: true},
    expired: {type: Date, default: moment().add(30, 'days').calendar(), required: true},
    receiver_id: {type: String},
    claimed: {type: Boolean, default: false}
=======
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
>>>>>>> f97c624c2c2b6ea75bf5dd7333dbbb39b43a6b00

});

module.exports = mongoose.model('Voucher', VoucherSchema);