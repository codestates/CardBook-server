const {users} = require('../../models')
module.exports ={
    post: async (req, res)=>{
        await users.findOne({
            email:req.email,
            password:req.password
        })
        .then(response=>{
            req.session.userid = response.data.id
<<<<<<< HEAD
            res.status(200).send();
        })
        .catch(err=>console.log(err));
=======
            res.status(200).send("<h1>로그인 실행</h1>");
        })
        .catch(err=>console.log(err));        
>>>>>>> c38a5afb0c23cc2ae1905f9a9fb8388fbca3bf70
    }
};