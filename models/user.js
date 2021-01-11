const bookshelf = require('../config/bookshelf');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = bookshelf.Model.extend({
    tableName: 'users'
})

const Token = bookshelf.Model.extend({
    tableName: 'tokens'
})

module.exports.get = () => {
    return User.fetchAll();
}

module.exports.add = async ({username, password, email, phone }) => {

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    return new User({ 
        username: username, 
        password: hashedPassword,
        email: email,
        phone: phone,
        permission: "User"
    }).save();
}

module.exports.login = (name, password, res) => {

        User.where({username: name}).fetch().then(async (user) => {
            try {
                if(await bcrypt.compare(password, user.attributes.password)) {
                    const loggedUsr = {
                        id: user.attributes.id,
                        permission: user.attributes.permission
                    }
                    const accessToken = this.generateAccessToken(loggedUsr)
                    // const refreshToken = jwt.sign(user.attributes, process.env.REFRESH_TOKEN_SECRET)
                    // new Token({
                    //     refreshtoken: refreshToken
                    // }).save()
                    if (user.attributes.permission === 'Admin') {
                        res.json({ accessToken: accessToken, access: 'Admin' })
                        return
                    }
                    res.json({ accessToken: accessToken, access: 'Access' })
                } else {
                    res.status(401).send("Wrong password.")
                }
            } catch (error) {
                res.status(403).send("Login error")
            }
        }).catch(() => res.status(400).send(`Couldn't find user: ${name}`));
    
}

module.exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401).send()

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send()
        req.user = user
        next()
    })
}

module.exports.generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800m'})
}

// module.exports.refreshToken = (req, res) => {
//     Token.where({refreshtoken: req.body.token}).fetch({require: false}).then((token) => {
//         if (token == null) { res.status(401).send('Session expired')}
//         else {
//             jwt.verify(req.body.token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//                 if (err) return res.status(403).send()
//                 const accessToken = this.generateAccessToken({name: user.name,
//                     password: user.password})
//                 res.json({ accessToken: accessToken })
//             })
//         }
//     })
// }

// module.exports.deleteToken = (req, res) => {
//     Token.where({refreshtoken: req.body.token}).destroy({require: false})
//         .then(res.status(200).send('Logged out'))
// }

exports.User = User;