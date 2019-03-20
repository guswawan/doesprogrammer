var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Joi = require('joi');


var UserSchema = new Schema({
    // id: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    name: String,
    phone: String,
    email: String,
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