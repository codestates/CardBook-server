const {contents} = require('../../models');
module.exports = {
    get: async (req,res)=>{
        if(req.body.id){
            await contents.findAll({
                where:{
                    userId:req.body.id
                }
            })
            .then(list=>{            
                res.send(200,list);
            })
        }else{
            res.send(404,"This user is invalid");
        }  
    }
}