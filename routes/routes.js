var express = require('express');
var router = express.Router();
var User = require('../models/users.model');
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

//POST
router.post('/user', (req, res) => {
    var user = new User();
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;

    user.save(function (err) {
        if (err) return next(err);
        res.json('Succes create user');
    })
})

module.exports = router;