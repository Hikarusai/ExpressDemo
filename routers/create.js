const express=require('express');
const multer  = require('multer');
const router=express.Router();

const controller=require('../Controllers/create');

var upload = multer({ dest: './public/uploads/' })

router.get('/',controller.create);

router.post('/',upload.single('avatar'),controller.postCreate);

module.exports=router;