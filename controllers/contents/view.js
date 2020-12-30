const {contents} = require('../../models');
module.exports ={
    get : async (req,res)=>{
        
        await contents.findOne({
            where : {
                id:req.body.id
            }
        })
        .then((data)=>{
            //조회수
            contents.update({hit:data.hit+1},{where:{id:req.body.id}})
            .then(resp=>{
                if(!resp[0]){
                    res.send(304,"Failed to increase view count")
                }                
            })
            .catch(err=>console.log(err))
            res.send(200,{...data.dataValues,hit:data.hit+1})
        })
        .catch(err=>res.send(404,"Failed to show up this content"))
    }
}