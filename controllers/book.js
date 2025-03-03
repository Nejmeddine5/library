const BookModel=require('../models/book')

exports.bookController=(req,res,next)=>{

    BookModel.getallbooks().then(books=>{
        res.render('index',{books:books})
    })
}