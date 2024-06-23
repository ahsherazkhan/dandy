import mongoose from 'mongoose'
const ProductSchema = new mongoose.Schema({
   content:{
       type:String,
       required:true
   },
   image:{
    type:String
   },
   price: {
    type:String,
    required: true
   },
   title: {
    type: String,
    required: true
   }
    
})

mongoose.model("Product",ProductSchema);
