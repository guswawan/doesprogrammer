var Voucher = require('../models/voucher.model');
var uuid = require('uuid');
var nodemailer = require('nodemailer');


//==POST VOUCHER==//
exports.voucher_create = function (req, res, next) {
	var code = uuid.v4();
	req.body.code = code;
	/* var voucher = new Voucher({
		code: uuid.v4(),
		name: req.body.name,
		amount: req.body.amount,
		exparied: req.body.exparied,
		receiver: req.body.receiver,
		claimed: false
	}); */
	var voucher = new Voucher(req.body);

	console.log(voucher);

	voucher.save(function (err, voucher) {
		if (err) {
			console.log(err)
			res.status(500).json({
				Message: 'Failed.',
				error: err
			});

		} else {

			console.log("Voucher created.")
			/*res.send('Voucher created.');*/
		}

		//CLAIMED URL
<<<<<<< HEAD
		var authenticationURL = 'http://192.168.2.11:3000/v1/claimed/'+voucher._id+'?code=' + voucher.code;
=======
		/* var authenticationURL = 'http://192.168.2.12:3000/v1/claimed/' + voucher._id + '?code=' + voucher.code; */
>>>>>>> f97c624c2c2b6ea75bf5dd7333dbbb39b43a6b00

		//TRANSPORTE GMAIL
		/* var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'agsn.does6@gmail.com',
				pass: 'does6programmer'
			}
		}); */

		//MAIL OPTION
		/* 	var mailOptions = {
				from: 'does6programmer <agsn.does6@gmail.com>',
				to: req.body.receiver,
				subject: 'VOUCHER GIVE AWAY!',
				text: 'You have a voucher with the following details... Amount: ' + req.body.amount + ' expired: ' + req.body.expired + 'receiver:' + req.body.receiver + 'name: ' + req.body.name,
				html: '<p>You have a voucher with the following link bellow...</p><a target=_blank href=\"' + authenticationURL + '\">' + authenticationURL + '</a>'
			}; */

		/* 	transporter.sendMail(mailOptions, function (err, info) {
				if (err) {
					console.log(err);
					res.status(200).json({
						Message: 'Success create voucher',
						voucherCreated: true,
						voucherSend: false
					});

				} else {
					console.log('Voucher sent: ', info);
					res.status(200).json({
						Message: 'Success create voucher and sent',
						voucherCreated: true,
						voucherSend: true
					});
				}
			}); */

	});
};

//==GET VERIFY CLAIM VOUCHER==//
exports.voucher_claim = function (req, res) {
	Voucher.updateOne({
<<<<<<< HEAD
        code: req.params.code,
        claimed:true
    }, (err, voucher) => {
        if (err) {
            res.status(400).send('Permintaan tak layak');
        }
        res.send('okay. Voucher berhasil diklaim')
    })
=======
		_id: req.params.id
	}, {
		claimed: true
	}, (err, voucher) => {
		if (err) {
			res.status(400).send('raiso')
		}
		res.send('ok. Terklaim')
	})
>>>>>>> f97c624c2c2b6ea75bf5dd7333dbbb39b43a6b00
};


//==GET VOUCHERS==//
exports.vouchers_detail = function (req, res) {
<<<<<<< HEAD
	Voucher.find(function (err, vouchers){
		if (err) return res.json ({
			success: false,
			error: err
		});

		return res.json({
			success: true,
			vouchers: vouchers
		});
=======
	Voucher.find((err, vouchers) => {
		if (err) return res.json({
			success: false,
			error: err
		});
		return res.json({
			success: true,
			vouchers: vouchers
		})
>>>>>>> f97c624c2c2b6ea75bf5dd7333dbbb39b43a6b00
	})
};

//==UPDATE VOUCHER==//
exports.voucher_update = function (req, res) {
<<<<<<< HEAD
	 Voucher.findOneAndUpdate(req.params.code,
	 	{$set: req.body},
	 	function (err){
		if (err) {
			return res.json ({
				success: false,
				error: err
		});

		} else {
			return res.json({
				success: true
			});
		}

		// res.send('Voucher updated.');
	})
=======
	console.log('update voucher', req.body)

	var updateVoucher = {
		amount: req.body.amount
	}

	Voucher.findOneAndUpdate({
		_id: req.params.id
	}, updateVoucher, (err, result) => {
		if (err) {
			return res.json({
				success: false,
				error: err
			});
		} else {
			console.log(result)
			return res.json({
				success: true
			});
		}
	});
>>>>>>> f97c624c2c2b6ea75bf5dd7333dbbb39b43a6b00
};

//==DELETE VOUCHER==//
exports.voucher_delete = function (req, res) {
<<<<<<< HEAD
	 Voucher.findOneAndDelete(req.params.code,
	 	function (err){
		if (err) return res.send(err);
		return res.json({
			success: true
		});
	})
=======
	var deleteById = {
		_id: req.params.id
	}
	Voucher.findOneAndDelete(deleteById,
		function (err) {
			if (err) return res.send(err);
			return res.json({
				success: true
			});
		});
>>>>>>> f97c624c2c2b6ea75bf5dd7333dbbb39b43a6b00
};


//==SEND VOUCHER EMAIL==//
/*exports.voucher_gmail = function (req, res) {
	var transporter = nodemailer.createTransport ({
		service: 'gmail',
		auth: {
			user: 'agsn.does6@gmail.com',
			pass: 'does6programmer'
		}
	});

	var mailOptions = {
		from: 'does6programmer <agsn.does6@gmail.com>',
		to: 'grindmatrik@gmail.com',
		subject: 'Selamat!',
		text: 'You have a voucher with the following details... Amount: ' + req.body.amount + ' expired: ' + req.body.expired,
		html: 'You have a voucher with the following details... Amount: ' + req.body.amount + ' expired: ' + req.body.expired
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err)
			console.log(err);		
		else
			console.log('Message sent: ', info);
	});
};
*/