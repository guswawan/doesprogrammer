var express = require('express');
var router = express.Router();
var user_controller = require('../controller/user.controller');
var voucher_controller = require('../controller/voucher.controller');
var admin_controller = require('../controller/admin.controller');


//POST USER
router.post('/user', user_controller.user_create);

//GET VERYFIED USER
router.get('/verify/:id', user_controller.user_verify);

//GET USERS
router.get('/users', user_controller.users_detail);

//UPDATE USER
router.put('/user/:id', user_controller.user_update);

//DELETE USER
router.post('/delete/:id', user_controller.user_delete);

//=============================================================//

//POST VOUCHER
router.post('/voucher', voucher_controller.voucher_create);

//GET CLAIMED VOUCHER
router.get('/claimed/:id', voucher_controller.voucher_claim);

//GET VOUCHERS
router.get('/vouchers', voucher_controller.vouchers_detail);

//UPDATE VOUCHER
router.put('/voucher/:id', voucher_controller.voucher_update);

//DELETE VOUCHER
router.post('/voucher/:id', voucher_controller.voucher_delete);

//=============================================================//

router.post('/admin', admin_controller.admin_create);
router.get('/admin', admin_controller.admin_detail);


module.exports = router;