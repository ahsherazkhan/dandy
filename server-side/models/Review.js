import mongoose from 'mongoose'
const ReviewSchema = new mongoose.Schema({
   title:{
       type:String,
       required:true
   },
   image:{
       type:String
   }
    
})

mongoose.model("Review",ReviewSchema)