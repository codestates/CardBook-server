const {users} = require('../../models')

module.exports ={
    post: (async (req, res)=>{
        try{
            const userInfo = await users.findOne({
                where : { email : req.body.email}
            })
            console.log(req.body.email)
            console.log(userInfo.dataValues.email === req.body.email)
        if(!req.body.email || !req.body.username || !req.body.phone || !req.body.password) {
            res.status(422).send('message: insufficient parameters supplied')
        } else if(userInfo){
            res.status(409).send('message: This email already exists.')
        } else {
            const newUser = await users.create({
                phone: req.body.phone,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                photos: req.file.filename
            })
            res.status(201).send(newUser)
        }
    }
    catch(err){
        console.log(err)
    }
})
}
