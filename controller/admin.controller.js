var Admin = require('../models/admin.model');



//POST=CREATE ADMIN
exports.admin_create = function (req, res) {
    var admin = new Admin(
    	{
         username : req.body.username,
         email : req.body.email,
         password : req.body.password
   		}
    );
    console.log(admin)

  admin.save(function (err) {
        if (err)
        	return next(err);	

        res.json('Successfully create admin')
    })
};

//==GET ADMIN==//
exports.admin_detail = function (req, res) {
	Admin.find(function (err, admin){
		if (err)
			return next (err);

		res.send(admin);
	})
};