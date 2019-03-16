var express = require('express');
var router = express.Router();
var User = require('../models/users.model');
var uuid = require('uuid');
// var nodemailer = require('nodemailer');
// var async = require('async');
// var crypto = require('crypto');
// var userController = require('../controllers/user.controller');

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

// //Verifikasi
// router.get('/users/verifikasi-email/:token', (req, res) => {
//     User.findOneAndUpdate({
//             emailVerificationToken: req.params.token
//         }, {
//             $set: {
//                 emailConfirmed: 'yes'
//             },
//             $unset: {
//                 emailVerificationToken: ''
//             }
//         }, {
//             save: true,
//             upsert: false
//         },
//         function (err, user) {
//             if (err) {
//                 res.send(err);
//             }
//             if (user.role == 'guru') {
//                 req.flash('SaveSucces', 'Terimakasih, Email anda telah diverifikasi');
//                 req.redirect('/user');
//             } else if (data.role == 'unverifed') {
//                 res.redirect('/verifed-data');
//             }
//         }
//     )
// })

//POST
router.post('/user', (req, res) => {
    var user = new User();
    user.id = uuid.v4();
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;

    user.save(function (err) {
        if (err) return next(err);
        res.json('Succes create user');
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
module.exports = router;