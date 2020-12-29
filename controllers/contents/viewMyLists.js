const {contents} = require('../../models');
module.exports = {
    get: async (req,res)=>{        
        await contents.findAll({
            where:{
                userId:req.body.id
            }
        })
        .then(list=>{            
            res.send(200,list)
        })
    }
}