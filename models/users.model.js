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
<<<<<<< HEAD
    authToken: {
        type: String,
        required: true,
        unique: true
    },
    verify: {
        type: Boolean,
        default: false
    }
=======
    balance: Number,
    verified: Boolean,
   
>>>>>>> 29f3baad2b18e1e147057c407b91eee5d659aa78
});


module.exports = mongoose.model('User', UserSchema);