const express=require('express')
const programController=require('./controller');

const router=express.Router();

router.post('/add',programController.add)
 
module.exports=router;