const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRETKEY = process.env.JWT_SECRETKEY;

const accessTokenRequest = async (req, res, next) => {
    try{
        const authorization = await req.headers['authorization'];
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token,JWT_SECRETKEY)

        if(decoded){
            res.locals.id = decoded.id
            next();
        } else{
            res.send(401,'unauthorized')
        }
    } catch(err){
        res.send(401,console.log(err))
    }
};

exports.accessTokenRequest = accessTokenRequest;