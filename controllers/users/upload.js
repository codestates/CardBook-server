const {users}=require('../../models');
const fs = require('fs');

module.exports={
    post: async (req,res)=>{
        // if(req.file === undefined){
        //     res.send(404,'No File Selected');
        // } else {
            const imgName = req.file.key;
            const imgLocation = req.file.location;
            res.send(200, {
                image:imgName,
                location: imgLocation
            })
        //}
        // let orignalData = await users.findOne({
        //     where:{
        //         id:req.body.id
        //     }
        // })
        // .catch(()=>res.send(404,"This user is invalid"));
        // if(orignalData){
        //     let photos = '';
        //     if(req.file){
        //         photos = req.file.location
        //     }else{                
        //         photos = "https://cardbook-images.s3.ap-northeast-2.amazonaws.com/user_profile_images/default_profile_image.png";
        //     }

        //     await users.update(
        //         {
        //             photos : photos
        //         },
        //         {
        //             where:{
        //                 id:req.body.id
        //             }
        //         }
        //     )
        //     .then(()=>{
        //         if(orignalData.photos){
        //             fs.unlink(orignalData.photos,()=>{});
        //         }
        //         res.send(200,"Successfully upload");    
        //     })            
        //     .catch((err)=>res.send(304,`Error : ${err}`))    
        // }
    }
}
