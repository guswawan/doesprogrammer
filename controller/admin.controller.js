var Admin = require('../models/admin.model');



//==POST==//
exports.admin_create = function (req, res) {
    /*  var admin = new Admin(
     	{
          username : req.body.username,
          email : req.body.email,
          password : req.body.password
    		}
     ); */
    var admin = new Admin(req.body);
    console.log(admin)

    admin.save(function (err, info) {
        if (err) {
            res.status(500).json({
                message: 'Failed.',
                login: false,
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Berhasil.',
                login: true
            });
        }
    })
};

//==GET ADMIN==//
exports.admin_detail = function (req, res) {
    Admin.find(function (err, admin) {
        if (err) return res.json({
            success: false,
            error: err
        });
        return res.json({
            success: true,
            admin: admin
        })
    })
};