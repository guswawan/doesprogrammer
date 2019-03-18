var Voucher = require('../models/voucher.model');
var uuid = require('uuid');

//POST
exports.voucher_create = function (req, res) {
	var voucher = new Voucher(
		{
			code: uuid.v4(),
			amount: req.body.amount,
			exparied: req.body.exparied,
			receiver: req.body.receiver,
			claimed: true
		}
	);
	console.log(voucher);

	voucher.save(function (err) {
		if (err) return next(err);

		res.json('Voucher created.');
	})
};