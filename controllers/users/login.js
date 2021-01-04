const { users } = require('../../models');
const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports = {
    post: async (req, res) => {
        const JWT_ACCESS_SECRET = process.env.JWT_SECRETKEY;
        const JWT_REFRESH_SECRETKEY = process.env.JWT_REFRESH_SECRETKEY;

        const { email, password } = req.body
        if (email === '' || password === '') {
            res.send(400, "Email or Password is blank");
            return;
        }
        const userinfo = await users.findOne({
            where: {
                email: req.body.email,
                password: req.body.password,
            }
        })

        if (userinfo) {
            //res.send(200,console.log(userinfo))
            const accessToken = jwt.sign({
                id: userinfo.dataValues.id,
            }, JWT_ACCESS_SECRET, {
                expiresIn: '30m'
            })

            const refreshToken = jwt.sign({
                id: userinfo.dataValues.id,
            }, JWT_REFRESH_SECRETKEY, {
                expiresIn: '3h'
            })

            res.cookie('refreshToken',refreshToken,{secure:true,httpOnly:true,sameSite:"none"});
            res.send(201, {
                msg: 'ok',
                data:{accessToken:accessToken}
            })


        } else {
            res.send(404, "This Email or Password is invalid")
        }
    }
};