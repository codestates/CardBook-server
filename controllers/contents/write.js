const {contents} = require('../../models');
module.exports = {
    post: async (req,res)=>{
        const {userId,title,content,subclassId} = req.body
        //contents table에 저장        
        await contents.create({
            userId:userId,
            title:title,
            images:req.file.path,
            content:content,
            subclassId:subclassId,
            hit:0
        })
        .then(()=>res.send(200,"This content is successfully written"))
        .catch(()=>res.send(404,"Failed to write this content"));

        
    }
}