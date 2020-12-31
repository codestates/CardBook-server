const {users} = require('../../models')
module.exports ={
    post: async (req, res)=>{
        // if(req.session.userid){
            req.session.destroy();
        // }else{
        //     res.send(400,"This user are not currently logined in");
        //     return;
        // }
        res.send(200,"Successfully Logout");
    }
};