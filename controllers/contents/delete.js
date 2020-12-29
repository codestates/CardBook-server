const {contents,myLists} = require('../../models');
const fs = require('fs')
module.exports = {
    post : async (req,res)=>{
        //id 는 cId        
        let content = await contents.findOne({where:{id:req.body.id}})        
        //mylists에서 삭제
        //await myLists.destory({where:{cId:req.body.id}});
        //contents 테이블에서 삭제
        await contents.destroy({where:{id:req.body.id}})
        .then(()=>{
            //컨텐츠 이미지 파일 삭제
            fs.unlink(content.images,()=>{
                res.send(200,"This content successfully deleted");
            });
        })
        .catch(()=>res.send(404,"Failed to delete this content"))
        
        
    }
};