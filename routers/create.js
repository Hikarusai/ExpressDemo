const express=require('express');
const router=express.Router();
const controller=require('../Controllers/create');

router.get('/',controller.create);

router.post('/',controller.postCreate);

module.exports=router;