const {contents} = require('../../models')

module.exports ={
    get: async (req,res)=>{
        await contents.findAll()
        .then(data=>res.send(200,data))
        .catch(()=>res.send(404,"This user is invalid"));
    }
}