var express = require('express');
var router = express.Router();
var User = require('../models/users.model');
var uuid = require('uuid');
var nodemailer = require ('nodemailer');
var voucher_controller = require('../controller/voucher.controller');

//POST VOUCHER
router.post('/voucher', voucher_controller.voucher_create);

//GET CLAIMED VOUCHER
router.get('/claimed/:code', voucher_controller.voucher_claim);

//GET VOUCHERS
router.get('/vouchers', voucher_controller.vouchers_detail);

//UPDATE VOUCHER
router.put('/:code/update', voucher_controller.voucher_update);

//DELETE VOUCHER
router.delete('/:code/delete', voucher_controller.voucher_delete);

module.exports = router;