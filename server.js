var express = require('express');
var bodyParser = require('body-parser');
var users = require('./routes/routes');
var PORT = 3000;
var mongoose = require('mongoose');


var app = express();

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//ROUTER
app.use('/v1', users);


//Set up mongoose connection
//MongoDB database
var dbRoute = "mongodb+srv://admin:adminpass@cluster0-f0h1m.mongodb.net/test?retryWrites=true";

// //Connect database
mongoose.connect(dbRoute, {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.once("open", () => console.log("Connected database"));

// //Jika database tidak connect
db.on("error", console.error.bind(console, "MongoDB connection error"));

//SERVER
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))