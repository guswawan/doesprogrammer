var Voucher = require('../models/voucher.model');
var uuid = require('uuid');
var nodemailer = require ('nodemailer');


//==POST VOUCHER==//
exports.voucher_create = function (req, res, next) {
	var voucher = new Voucher(
		{
			code: uuid.v4(),
			amount: req.body.amount,
			exparied: req.body.exparied,
			receiver: req.body.receiver,
			claimed: false
		}
	);
				
	console.log(voucher);

	voucher.save(function (err, voucher) {
		if (err) {
			console.log(err)
			res.status(500).json({
				Message: 'Failed.',
				error: err
			});

		}else{

			console.log("Voucher created.")
			/*res.send('Voucher created.');*/
		}

		//CLAIMED URL
		var authenticationURL = 'http://192.168.2.11:3000/v1/claimed/'+voucher._id+'?code=' + voucher.code;

		//TRANSPORTE GMAIL
		var transporter = nodemailer.createTransport ({
			service: 'gmail',
			auth: {
				user: 'agsn.does6@gmail.com',
				pass: 'does6programmer'
			}
		});

		//MAIL OPTION
		var mailOptions = {
			from: 'does6programmer <agsn.does6@gmail.com>',
			to: 'grindmatrik@gmail.com',
			subject: 'VOUCHER GIVE AWAY!',
			text: 'You have a voucher with the following details... Amount: ' + req.body.amount + ' expired: ' + req.body.expired + req.body.receiver,
			html: '<p>You have a voucher with the following link bellow...</p><a target=_blank href=\"' + authenticationURL + '\">'+ authenticationURL +'</a>'
		};

		transporter.sendMail(mailOptions, function (err, info) {
			if (err) {
				console.log(err);
				res.status(200).json({
					Message: 'Success create voucher',
					voucherCreated: true,
					voucherSend: false
				});

			}else{
				console.log('Voucher sent: ', info);
				res.status(200).json({
					Message: 'Success create voucher and sent',
					voucherCreated: true,
					voucherSend: true
				});
			}
		});

	});	
};

//==GET VERIFY CLAIM VOUCHER==//
exports.voucher_claim = function (req, res) {
	Voucher.updateOne({
        code: req.params.code,
        claimed: true
    }, (err, voucher) => {
        if (err) {
            res.status(400).send('Permintaan tak layak');
        }
        res.send('okay. Voucher berhasil diklaim')
    })
};

//==GET VOUCHERS==//
exports.vouchers_detail = function (req, res) {
	 Voucher.find(function (err, voucher){
		if (err)
			return next (err);

		res.send(voucher);
	})
};

//==UPDATE VOUCHER==//
exports.voucher_update = function (req, res) {
	 Voucher.findOneAndUpdate(req.params.code,
	 	{$set: req.body},
	 	function (err){
		if (err)
			return next (err);

		res.send('Voucher updated.');
	})
};

//==DELETE VOUCHER==//
exports.voucher_delete = function (req, res) {
	 Voucher.findOneAndDelete(req.params.code,
	 	function (err){
		if (err)
			return next (err);

		console.log('voucher deleted.')
		res.send('Voucher deleted.');
	})
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