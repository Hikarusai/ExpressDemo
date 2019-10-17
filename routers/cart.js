const express=require('express');
const router=express.Router();

const controller=require('../Controllers/cart');

router.get('/add/:productId',controller.addToCart);


module.exports=router;