const {users} = require('../../models');
module.exports = {
    post : async(req,res)=>{
        await users.findOne({
            where:{
                email : req.body.email
            }
        })
        .then(user=>{
            res.send(200,{email : user.email})
        })
        .catch(err=>res.send(404,"Nothing found with this email"))
    }
}