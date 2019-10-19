var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    // id: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    name: String,
    phone: String,
    email: {
        type: String,
        unique: true
    },
    balance: {
        type: Number,
        default: 0
    },
    authToken: {
        type: String,
        required: true,
        unique: true
    },
    verify: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('User', UserSchema);