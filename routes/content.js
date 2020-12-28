const express = require('express');
const router = express.Router();
const {contents} = require('../controllers')

//GET /contents/view
router.get('/view',contents.view.get);
//GET /contents/viewmylists
router.get('/viewmylists',contents.viewMyLists.get);
//GET /contents/viewpubliclists
router.get('/viewpubliclists',contents.viewPublicLists.get)

module.exports = router;