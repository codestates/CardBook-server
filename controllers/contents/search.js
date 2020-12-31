const {contents} = require('../../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
module.exports = {
    post : async (req,res)=>{        
        await contents.findAll({
            where:{
                [Op.or]:[
                    {
                        title:{
                            [Op.like]:`%${req.body.keyword}%`
                        }
                    },
                    {
                        content:{
                            [Op.like]:`%${req.body.keyword}%`
                        }
                    }
                ]
            }
        })
        .then(data=>res.send(200,data))
        .catch(err=>res.send(400,{message:err}));
    }
}