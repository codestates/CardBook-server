const {users} = require('../../models')
module.exports ={
    post: async (req, res)=>{
        await users.findOne({
            email:req.email,
            password:req.password
        })
        .then(response=>{
            req.session.userid = response.data.id
            res.status(200).send();
        })
        .catch(err=>console.log(err));
    }
};