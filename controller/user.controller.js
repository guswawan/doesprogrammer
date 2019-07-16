var crypto = require('crypto');
var User = require('../models/user.model');
var nodemailer = require('nodemailer');


//POST USER
exports.user_create = function (req, res, next) {
    var seed = crypto.randomBytes(20);
    var authToken = crypto.createHash('sha1').update(seed + req.body.email).digest('hex');
    req.body.authToken = authToken;

    var user = new User(req.body);




    user.save(function (err, user) {
        if (err) {
            console.log(err)
            res.status(500).json({
                message: 'Failed.',
                error: err
            });
        } else {

            console.log('User saved.')

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'cahyodoes6@gmail.com',
                    pass: 'afterlife123'
                }
            })
            var authenticationURL = 'http://192.168.2.12:3000/v1/verify/' + user._id + '?token=' + user.authToken;
            var mailOptions = {
                from: 'does6programmer <cahyodoes6@gmail.com>',
                to: user.email,
                subject: 'Confirm your email',
                text: 'Keterangan',
                html: '<a target=_blank href=\"' + authenticationURL + '\">' + authenticationURL + '</a>'
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err)
                    res.status(200).json({
                        message: 'Succes create user',
                        userCreated: true,
                        emailSent: false
                    });
                } else {
                    console.log("Message sent", info)
                    res.status(200).json({
                        message: 'Succes create user & email sent',
                        userCreated: true,
                        emailSent: true
                    });
                }
            })

        };
    })
};

//GET VERIFIED USER
exports.user_verify = function (req, res) {
    User.updateOne({
        _id: req.params.id
    }, {
        verify: true
    }, (err, user) => {
        if (err) {
            res.status(400).send('raiso')
        }
        res.send('Selamat email anda telah terverifikasi otomatis')
    })
};

//GET USERS
exports.users_detail = function (req, res) {
    User.find((err, users) => {
        if (err) return res.json({
            success: false,
            error: err
        });
        return res.json({
            success: true,
            users: users
        })
    })
};

//USER PUT UPDATE
exports.user_update = function (req, res) {
    var updateUser = {
        name: req.body.name
    }

    User.findOneAndUpdate({
        id: req.params.id
    }, updateUser, err => {
        if (err) {
            return res.json({
                success: false,
                error: err
            });
        } else {
            return res.json({
                success: true
            });
        }
    });
};

//USER DELETE
exports.user_delete = function (req, res) {
    var deleteById = {
        _id: req.params.id
    }
    User.findOneAndDelete(deleteById, err => {
        if (err) return res.send(err);
        return res.json({
            succes: true
        });
    });
};