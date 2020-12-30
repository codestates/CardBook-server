const {contents} = require('../../models');
const axios = require('axios');
module.exports = {
    post : async (req,res)=>{
        const {id,content,title,subclassId} = req.body        
        //id는 cId
        
        await contents.update(
            {
                content : content,
                title:title,                
                subclassId:subclassId
            },
            {
                where:{
                    id:id
                }
            }
        )
        .then((data)=>res.send(200,data))
        .catch(()=>res.send(404,"Failed to modify this content"))
        
    }
};