const {users} = require('../../models')
module.exports ={
    post: async (req, res)=>{
        if(req.session.userid){
            req.session.destroy();
        }
        res.send(200,"Successfully Logout")
    }
};