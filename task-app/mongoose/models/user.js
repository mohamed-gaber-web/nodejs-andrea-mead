const mongoose = require('mongoose'); // mongoose library
const validator = require('validator'); // validator library

const User = mongoose.model('User', {
    name: { // document
        type: String,
        required: true, // validate document
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) { // 30 / 25 / 100 
            if (value < 0) { // -
                throw new Error('age must be a postive number');
            }
        } 
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate (value) {
            if(!validator.isEmail(value)) {
                throw new Error('email is invalide');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7, // 6 / 5 error
        validate (value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error("must be password don't contain text password");
            } 
        }
    }

});

module.exports = User;