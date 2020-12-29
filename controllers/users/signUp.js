const {users} = require('../../models')

module.exports ={
    post: async (req, res)=>{
        try{
            const userInfo = await users.findOne({
                where : { email : req.body.email}
            })
            //console.log(req.file)
            //필수 항목 누락시 오류메시지 출력
            if(!req.body.email || !req.body.username || !req.body.phone || !req.body.password) {
                res.status(422).send('message: insufficient parameters supplied')
            }
            //이메일 중복시 오류메시지 출력
            else if(userInfo){
                res.status(409).send('message: This email already exists.')
            } 
            //중복되는 이메일 없을시 회원가입 진행
            else if(req.file === undefined){ //회원가입 진행 시 이미지 업로드가 없으면 기본 프로필 사진 지정
                const newUser = await users.create({
                    photos: "/home/minsu/CodeStates/im24-CardBook-server/images/default_profile_image.png",
                    phone: req.body.phone,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                })
                res.status(201).send(newUser)
            // 정상적인 회원가입 진행
            }else{                
                const newUser = await users.create({
                    photos: req.file.path,
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
