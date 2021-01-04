const {users} = require('../../models');
module.exports={
    post: async (req,res)=>{
        await users.findOne({
            where:{
                email:req.body.email,
                phone:req.body.phone
            }
        })
        .then(user=>res.send(200,{password : user.password}))
        .catch(err=>res.send(404,"Nothing found with thie email and phone number"))
    }
}