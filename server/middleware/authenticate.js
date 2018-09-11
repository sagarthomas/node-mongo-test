var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject(); // Will redirect to catch -> status 401
        }

        req.user = user;
        req.token = token;
        next(); // Must be called to continue to the express request
    }).catch((e) => {
        // 401 is HTTP code for authorization failed
        res.status(401).send();
    });
};

module.exports = {authenticate};