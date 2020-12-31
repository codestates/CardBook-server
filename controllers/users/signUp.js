const {users} = require('../../models');
const {body, validationResult} = require('express-validator');

module.exports ={
    post: async (req, res)=>{
        try{
            const userInfo = await users.findOne({
                where : { email : req.body.email}
            })
            //console.log(req.file)
            //필수 항목 누락시 오류메시지 출력
            if(!req.body.email || !req.body.username || !req.body.phone || !req.body.password) {
                res.status(422).send('message: insufficient parameters supplied.')
            }
            //이메일 중복시 오류메시지 출력
            else if(userInfo){
                res.status(409).send('message: This email already exists.')
            //회원가입 진행
            }else{
                const newUser = await users.create({                    
                    phone: req.body.phone,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                })
                res.status(201).send(newUser)
            }
        }
        catch(err){
            console.log(err)
        }
    }
}
