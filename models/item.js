const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        required:true
    },
    Avalable:{
        type:Boolean,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});


const item=mongoose.model('item',ProductSchema);
module.exports=item;