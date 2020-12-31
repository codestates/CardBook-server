const {myLists} = require('../../models')
module.exports={
    post: async(req,res)=>{        
        await myLists.create({
            userId:req.body.userId,
            cId:req.body.cId
        })
        .then(()=>res.send(200,"Success"))
        .catch(()=>res.send(404,"Failed"));
    }
}