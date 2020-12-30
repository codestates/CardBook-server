const {users}=require('../../models');
const fs = require('fs')
module.exports={
    post: async (req,res)=>{
        let orignalData = await users.findOne({
            where:{
                id:req.body.id
            }
        })
        .catch(()=>res.send(404,"This id is invalid"));
        if(orignalData){
            let photos = '';
            if(req.file){
                photos = req.file.path
            }else{
                photos= "/home/minsu/CodeStates/im24-CardBook-server/images/default_profile_image.png";
            }

            await users.update(
                {
                    photos : photos
                },
                {
                    where:{
                        id:req.body.id
                    }
                }
            )
            .then(()=>{
                if(orignalData.photos){
                    fs.unlink(orignalData.photos,()=>{});
                }
                res.send(200,"Successfully upload");    
            })            
            .catch((err)=>res.send(404,`Error : ${err}`))    
        }
        
    }
}
