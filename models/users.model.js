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