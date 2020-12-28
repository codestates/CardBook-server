require('dotenv').config();

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');

module.exports ={
    post: async (req,res)=>{
        axios({
            method: 'post',
            url: `https://github.com/login/oauth/access_token`,
            headers: {
                accept: 'application/json'
            },
            data: {
                client_id: clientID,
                client_secret: clientSecret,
                code: req.body.authorizationCode
            }
            .then((response) => {
                accessToken = response.data.access_token;
                res.status(200).send({ accessToken: accessToken })
            
              }).catch(error => {
                res.status(404).send('GIT_LOGIN EEROR')
              })
        })
    }
};