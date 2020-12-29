let express = require('express');
let router = express.Router();
const {users} = require('../controllers');
const {auth} = require('../controllers')

const multer = require('multer');

let date = new Date();
const userUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '/../images/users')
        },
        filename: (req, file, cb) => {
            cb(null, date + file.originalname);
        }
    })
})

//POST /users/signin
router.post('/login',users.signIn.post);
//POST /users/signup
router.post('/signup',userUpload.single('image'),users.signUp.post);
//POST /users/signout
router.post('/logout',users.signOut.post)
//GET /users/userinfo
router.get('/userinfo',users.userInfo.get);
//POST /users/userinfo
router.post('/userinfo/modify',userUpload.single('image'),users.userInfo.post)

// -----------------------Auth Login------------------------------------------------------------
//POST 
router.post('/gitlogin',auth.gitlogin.post);


module.exports = router;