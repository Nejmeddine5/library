const bookController=require('../controllers/book')

const router=require('express').Router()

router.get('/',bookController.bookController)


module.exports=router
