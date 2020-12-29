const {contents} = require('../../models');
const fs = require('fs');
module.exports = {
    post : async (req,res)=>{
        const {id,content,title,subclassId} = req.body        
        //id는 cId
        let originalData = await contents.findOne({
            where:{
                id:id
            }
        });        
        console.log(originalData.images)
        await contents.update(
            {
                content : content,                
                title:title,
                images:req.file.path,
                subclassId:subclassId
            },
            {
                where:{
                    id:id
                }
            }
        )
        .then(()=>{
            console.log
            fs.unlink(originalData.images,()=>{
                res.send(200,"Successfully modified")
            })            
        })
        .catch(()=>res.send(404,"Failed to modify this content"))
        
    }
};