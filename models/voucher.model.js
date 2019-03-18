var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoucherSchema = new Schema({
<<<<<<< HEAD
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
=======

	code: {type: String, unique: true, required: true},
    amount: {type: Number, required: true},
    expired: {type: Date, required: true},
    type: {type: Date, default: Date.now, required: true},
    receiver: {type: String},
    claimed: {type: Boolean}

});
>>>>>>> 29f3baad2b18e1e147057c407b91eee5d659aa78

module.exports = mongoose.model('Voucher', VoucherSchema);