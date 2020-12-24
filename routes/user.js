let express = require('express');
let router = express.Router();

const multer = require('multer');
const upload = multer({
    dest: __dirname + '/../images'
})

const {users} = require('../controllers');
//POST /users/signin
router.post('/login',users.signIn.post);
//POST /users/signup
router.post('/signup',upload.single('image'),users.signUp.post);
//router.post('/upload',upload.single('image'),users.upload.post);
//POST /users/signout
router.post('/logout',users.signOut.post)
//GET /users/userinfo
router.get('/userinfo',users.userInfo.get);
//POST /users/userinfo
router.post('/userinfo/modify',users.userInfo.post)
module.exports = router;