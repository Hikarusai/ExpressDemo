const express=require('express');
const router=express.Router();

const controller=require('../Controllers/product');

router.get('/',controller.product);


module.exports=router;