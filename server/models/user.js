const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

//schema.methods contains the instance methods for User
// We use normal functions over arrow functions in this case
// because we need to use the "this" keyword

//We override the toJSON method that express would normally call when dealing with user
userSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
}

userSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens = user.tokens.concat([{access, token}]);
    
    return user.save().then(() => {
        return token;
    });
};

// Use statics when creating non-instance methods aka static methods
userSchema.statics.findByToken = function (token) {
    var User = this; // We use capital "User" for dealing with statics

    var decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        return Promise.reject();
    }

    // We return the result in order to return a promise object so we can then chain
    // a .then to the end of findByToken
    // In this case we wrapped id and tokens.token in quotes in order to allow the '.' operator
    return User.findOne({
        '_id':decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

var User = mongoose.model('User', userSchema);

module.exports = {User};