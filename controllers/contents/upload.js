const {contents} = require('../../models');
const fs = require('fs');
module.exports={
    post: async (req,res)=>{
        let originalData = await contents.findOne({
            where:{
                id:req.body.id
            }
        })
        .catch(()=>res.send(404,"This contents does not exist"));
        if(!originalData){
            res.send(404,"This content does not exist")
        }
        await contents.update(
            {
                images:req.file.path
            },
            {
                where:{
                    id:req.body.id
                }
            }
        )
        .then(()=>{                
            if(originalData.images){
                fs.unlink(originalData.images,()=>{});
            }
            res.send(200,"Successfully upload");          
        })
        .catch(err=>res.send(304,`Error : ${err}`))
    }
}