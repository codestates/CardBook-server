const {users} = require('../../models')
module.exports ={
    post: async (req, res)=>{
        const {email,password} = req.body
        if(email===''||password===''){
            res.send(404,"Email or Password is blank")
        }
        await users.findOne({
            email:req.body.email,
            password:req.body.password
        })
        .then(response=>{
            req.session.userid = response.email
            res.status(200).send();
        })
        .catch(err=>res.status(404,"This Email or Password is invalid"));
    }
};