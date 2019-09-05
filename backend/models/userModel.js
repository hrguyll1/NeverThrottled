var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    attEmail: {
        type: String,
        required: true
    },
    attPW: {
        type: String,
        required: true
    },
    //15 digit number
    imei: {
        type: Number,
        required: true
    },
    //20 digit number
    iccid: {
        type: Number,
        required: true
    },
    autoRenewal: {
        type: Boolean,
        required: true,
        default: false
    },
    ebayUsername: {
        type: String,
        required: false
    }
});

var User = module.exports = mongoose.model('users', userSchema)  ;