const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRETKEY = process.env.JWT_SECRETKEY;
const JWT_REFRESH_SECRETKEY = process.env.JWT_REFRESH_SECRETKEY;

module.exports = {
    get: async (req, res) => {
        const token = req.cookies.refreshToken
        if (!token) {
            res.send(404, 'refresh token not provided')
        } else if (token === 'invalidtoken') {
            res.send(404, 'invalid refresh token, please log in again')
        } else {
            let data = jwt.verify(token, JWT_REFRESH_SECRETKEY)
            if (!data) {
                res.send(404, 'refresh token has been tempered')
            } else {
                let refreshToken = jwt.sign(data, JWT_REFRESH_SECRETKEY)
                let accessToken = jwt.sign(data, JWT_SECRETKEY)
                res.cookie('freshToken', refreshToken)
                res.send(201, {
                    msg: 'ok',
                    data: { email: data, accessToken: accessToken }
                })
            }
        }
    }
}