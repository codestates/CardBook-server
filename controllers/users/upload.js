const multer = require('multer')
const upload = multer({ dest: '../../image'});

module.exports = {
    post: ((req,res) => {
        try{
            if(req.file){
                res.json(req.file);
                console.log(req.file.path)
            } else{
                throw 'error';
            }
        }
        catch (err){
            console.log(err)
        }
    })
}