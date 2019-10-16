const express=require('express');
const router=express.Router();

const controller=require('../Controllers/login');

router.get('/',controller.login);

router.post('/',controller.postLogin);
module.exports=router;