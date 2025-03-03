const { rejects } = require('assert')
const mongoose=require('mongoose')
const { resolve } = require('path')

var schemaBook=mongoose.Schema({
    _id:String,
    title:String,
    description:String,
    author:String,
    price:Number,
    image:String

})

var Book=mongoose.model('book',schemaBook)
var url='mongodb://localhost:27017/library'
exports.getallbooks=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
            return Book.find({})

        }).then(books=>{
            mongoose.disconnect()
            resolve(books)
        }).catch(err=>reject(err))
    })
}
