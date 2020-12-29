const express = require('express');
const router = express.Router();
const multer = require('multer');
const {contents} = require('../controllers');

let date = new Date();

const contentsUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '/../images/contents');
        },
        filename: (req, file, cb) => {
            cb(null, date + file.originalname);
        }
    })
});

//GET /contents/view
router.get('/view',contents.view.get);
//GET /contents/viewmylists
router.get('/viewmylists',contents.viewMyLists.get);
//GET /contents/viewpubliclists
router.get('/viewpubliclists',contents.viewPublicLists.get)
//POST /contents/write
router.post('/write',contentsUpload.single('image'),contents.write.post)
//POST /contents/modify
router.post('/modify',contentsUpload.single('image'),contents.modify.post);
//POST /contents/delete
router.post('/delete',contents.delete.post);
module.exports = router;