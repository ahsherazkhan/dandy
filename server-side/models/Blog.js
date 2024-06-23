import mongoose from 'mongoose'
const BlogSchema = new mongoose.Schema({
   content:{
       type:String,
       required:true
   },
   image:{
    type:String
   }
    
})

mongoose.model("Blog",BlogSchema)