var express = require('express');
var router = express.Router();
var User = require('../models/users.model');
var uuid = require('uuid');
<<<<<<< HEAD
var crypto = require('crypto');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
=======
const voucher_controller = require('../controller/voucher.controller');
// var nodemailer = require('nodemailer');
// var async = require('async');
// var crypto = require('crypto');
// var userController = require('../controllers/user.controller');
>>>>>>> 29f3baad2b18e1e147057c407b91eee5d659aa78

//GET
router.get('/users', (req, res) => {
    User.find((err, user) => {
        if (err) return res.json({
            succes: false,
            error: err
        });
        return res.json({
            succes: true,
            user: user
        })
    })
})

//GET VERIFY EMAIL
router.get('/verify', (req, res) => {
    User.findOne({
        authToken: req.query.token
    }, (err, user) => {
        if (err) {
            return console.error(err);
        }

        user.verify = true;
        user.save(function (err) {
            if (err) return console.error(err);
            console.log('Succesfully updated user');
            console.log(user);
            res.send(user)
        })
    })

    sgMail.send({
        to: User.email,
        from: 'does6programmer@gmail.com',
        subject: 'Email confirmed!',
        html: 'Awesome! We can now send you kick-ass emails'
    }, function (err, json) {
        if (err) {
            return console.error(err);
        }
        console.log(json);
    });
})


//POST
router.post('/user', (req, res) => {
    var seed = crypto.randomBytes(20);
    var authToken = crypto.createHash('sha1').update(seed + req.body.email).digest('hex');
    var user = new User();
    user.id = uuid.v4();
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.authToken = authToken,
        user.verify = false

    user.save(function (err) {
        if (err) return res.json("create user failed");
        res.json('Succes create user');
    })

    var authenticationURL = 'http://192.168.2.12:3000/v1/verify?token=' + user.authToken;
    sgMail.send({
        to: user.email,
        from: 'doesprogrammergen6@gmail.com',
        subject: 'Confirm your email',
        html: '<a target=_blank href=\"' + authenticationURL + '\">Confirm your email</a>'
    }, (err, json) => {
        if (err) {
            return console.error(err);
        }
        console.log(json)
    })

})


//UPDATE
router.put('/user/:id', (req, res) => {
    var updateUser = {
        name: req.body.name
    }

    User.findOneAndUpdate({
        id: req.params.id
    }, updateUser, err => {
        if (err) {
            return res.json({
                succes: false,
                error: err
            });
        } else {
            return res.json({
                succes: true
            });
        }
    });
});

//DELETE
router.delete('/user/:id', (req, res) => {
    var deleteById = {
        id: req.params.id
    }
    User.findOneAndDelete(deleteById, err => {
        if (err) return res.send(err);
        return res.json({
            succes: true
        });
    });
});

//POST VOUCHER
router.post('/voucher', voucher_controller.voucher_create);


module.exports = router;