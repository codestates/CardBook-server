const multer = require('multer')
const upload = multer({ dest: '../../image'});

module.exports = {
    post: (upload.single('image'), async (req,res) => {
        try{
            const image = req.file;
            console.log(req.file)
            if(image === undefined){
                res.status(400).send('이미지 존재 하지 않습니다.')
            } else{
            res.status(200).send({
                msg:'요청 성공'
            })
        }
        }
        catch (err){
            console.log(err)
        }
    })
}