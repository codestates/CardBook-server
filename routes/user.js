let express = require('express');
let router = express.Router();

const multer = require('multer');
const {users} = require('../controllers');

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

// const contentsUpload = multer({
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, __dirname + '/../images/contents')
//         },
//         filename: (req, file, cb) => {
//             cb(null, date + file.originalname);
//         }
//     })
// })

//POST /users/signin
router.post('/login',users.signIn.post);
//POST /users/signup
router.post('/signup',userUpload.single('image'),users.signUp.post);
//router.post('/upload',upload.single('image'),users.upload.post);
//POST /users/signout
router.post('/logout',users.signOut.post)
//GET /users/userinfo
router.get('/userinfo',users.userInfo.get);
//POST /users/userinfo
router.post('/userinfo/modify',users.userInfo.post)

module.exports = router;