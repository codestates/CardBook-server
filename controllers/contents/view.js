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
            res.body
            contents.update({hit:data.hit+1},{where:{id:req.body.id}})
            .then(resp=>{
                if(!resp[0]){
                    res.send(404,"failed to Update hit")
                }                
            })
            .catch(err=>console.log(err))
            res.send(200,{...data.dataValues,hit:data.hit+1})
        })
        .catch(err=>{console.log(err)})
    }
}