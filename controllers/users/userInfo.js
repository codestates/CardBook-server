const {users} = require('../../models')
module.exports ={
    get : async (req,res)=>{
        // if(!req.session.userid){
        //     res.send(404,"This user doesn't signed in")
        //     return;
        // }
        //req.session.userid로 고쳐야함 나중에
        await users.findOne({id:req.body.id})
        .then(response=>res.send(200,response))
        .catch(()=>res.send(404,"This user does not exist"))
        return;
    },
    post: async (req,res)=>{
        
        // if(!req.session.userid){
        //     res.send(404,"This user does not sign in")
        //     return
        // }
        if(req.body.password){
            //비밀번호변경
            await users.update(
                {
                    password:req.body.password,                    
                },
                {
                    where:{
                        id:req.body.id
                    }
                }
            )
            .then(()=>res.send(200,"Successfully Updated"))
            .catch(()=> res.send(404,"This user does not exist"))
        }else{
            //유저정보만 변경
            console.log(req.file)
            await users.update(
                {
                    username : req.body.username,
                    email : req.body.email,
                    phone : req.body.phone,
                    photos : req.file.path              
                },
                {
                    where:{
                        id:req.body.id
                    }
                }
            )
            .then((response)=>{
                if(response[0]){
                    res.send(200,"Successfully Updated")
                }else{
                    res.send(404,"This user does not exist")
                }
            })           
        }
    }
};