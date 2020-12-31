const {users} = require('../../models');

module.exports ={
    post: async (req, res)=>{
        const {email,password} = req.body
        if(email===''||password===''){
            res.send(400,"Email or Password is blank");
            return;
        }
        await users.findOne({
            where:{
            email:req.body.email,
            password:req.body.password,
            }
        })
        .then(response=>{            
            req.session.userid = response.id
            res.send(200,"Successfully Login!");
        })
        .catch(err=>res.status(404,"This Email or Password is invalid"));
    }
};