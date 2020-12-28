const {users} = require('../../models')
module.exports ={
    get : async (req,res)=>{
        
        // if(!req.session.userid){
        //     res.send(404,"This user doesn't signed in")
        //     return;
        // }
        //req.session.userid로 고쳐야함 나중에
        await users.findOne({id:req.body.id})
        .then(response=>res.send(200,response))
        .catch(()=>res.send(404,"This user does not exist"))
        return;
    },
    post: async (req,res)=>{
        
    }
};