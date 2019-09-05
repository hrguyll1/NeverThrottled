User = require('../models/userModel');

//CREATE user
function newUser(req, res) {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.address = req.body.address;
    user.attEmail = req.body.attEmail;
    user.attPW = req.body.attPW;
    user.imei = req.body.imei;
    user.iccid = req.body.iccid;
    user.autoRenewal = req.body.autoRenewal ? req.body.autoRenewal : false;
    user.ebayUsername = req.body.ebayUsername ? req.body.ebayUsername : null;

    //Save new User
    user.save(function(err) {
        err ? res.json(err) : res.json({
                message: 'User created', data: user
            });
    })
}

//RETRIEVE all users
function getAllUsers(req, res) {
    var user = new User();

    User.find({}, function(err, users) {
        err ? res.json({status: "error", message: err}) : res.json({status: "success", data: users});
    });
}

//RETRIEVE user by ID
function getUser(req, res) {
    var user = new User();

    User.find({_id: req.params.userId}, function(err, users) {
        err ? res.json({status: "error", message: err}) : res.json({status: "success", data: users});
    });
}

//UPDATE user by ID
function updateUser(req, res) {
    req.body.firstName = "ayyy";
    var user = new User();
    User.findById(req.params.userId, function(err, user) {
        err && res.send(err);

        user.firstName = req.body.firstName ? req.body.firstName : user.firstName,
        user.lastName = req.body.lastName ? req.body.lastName : user.lastName;
        user.email = req.body.email ? req.body.email : user.email;
        user.phone = req.body.phone ? req.body.phone : user.phone;
        user.address = req.body.address ? req.body.address : user.address;
        user.attEmail = req.body.attEmail ? req.body.attEmail : user.attEmail;
        user.attPW = req.body.attPW ? req.body.attPW : user.attPW;
        user.imei = req.body.imei ? req.body.imei : user.imei;
        user.iccid = req.body.iccid ? req.body.iccid : user.iccid;
        user.autoRenewal = req.body.autoRenewal ? req.body.autoRenewal : false;
        user.ebayUsername = req.body.ebayUsername ? req.body.ebayUsername : null;
        
        user.save(function(err) {
            err ? res.json(err) : res.json({message: 'User Info Updated Successfully.', data: user});
        });
    });
}

//DELETE user by id
function deleteUser(req, res) {
    var user = new User();

    User.remove({_id: userId}, function(err, users) {
        err ? res.json({status: "error", message: err}) : res.json({status: "success", message: "User deleted"});
    });
}
module.exports = {
    newUser: newUser,
    getAllUsers: getAllUsers,
    updateUser: updateUser,
    getUser: getUser,
    deleteUser: deleteUser
}