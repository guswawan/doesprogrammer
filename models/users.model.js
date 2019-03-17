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
   
});

module.exports = mongoose.model('User', UserSchema);