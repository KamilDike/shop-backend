const User = require('../models/user');

exports.get = (req, res) => {
    User.get().then(
        (allUsers) => {
            const currentUser = allUsers.filter(user => 
                user.attributes.id === req.user.id
            );
            res.json(currentUser)
        }
    );
};

exports.authenticate = (req, res, next) => {
    User.authenticateToken(req, res, next);
}

exports.refreshToken = (req, res) => {
    User.refreshToken(req, res)
}

exports.add = (req, res) => {
    let errors = validateUser(req.body);
    if (errors.length) {
        res.status(400).send(errors)
    } else {
        User.add(req.body)
        .then(() => {
            res.status(201).send()
        })
        .catch((err) => {
            res.status(401).send('Try different credentials.')
        })
    }
}

exports.login = (req, res) => {
    User.login(req.body.username, req.body.password, res);
}

exports.logout = (req, res) => {
    User.deleteToken(req, res)
}

function validateUser({username, password, email, phone}) {
    let erros = []
    if (!username) erros.push('username')
    if (!password) erros.push('password')
    if (!email) erros.push('email')
    if (!phone) erros.push('phone')
    return erros;
}