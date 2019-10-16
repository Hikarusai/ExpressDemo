const express=require('express');
const router=express.Router();

const controller=require('../Controllers/user');

router.get('/',controller.user);

router.get('/search',controller.userSearch);

router.get('/:id',controller.userView);

module.exports=router;