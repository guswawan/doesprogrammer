var express = require('express');
var bodyParser = require('body-parser');
var users = require('./routes/routes');
var mongoose = require('mongoose');
var cors = require('cors');


//==EXPRESS INIT==//
var app = express();
var PORT = 3000;


//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


//==SET MONGOOSE CONNECTION==//
//MongoDB database
var dbRoute = "mongodb+srv://admin:adminpass@cluster0-f0h1m.mongodb.net/test?retryWrites=true";

//==CONNECT DATABASE==//
mongoose.connect(dbRoute, {
    useNewUrlParser: true
});


//==CEK KONEKSI KE DB==//
var db = mongoose.connection;
db.once("open", () => console.log("Connected database"));
db.on("error", console.error.bind(console, "MongoDB connection error"));


//API ROUTER
app.use('/v1', users);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))