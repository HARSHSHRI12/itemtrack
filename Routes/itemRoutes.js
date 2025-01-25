const express=require('express');
const router=express.Router();
const item=require('../models/item');

//create post method for item

router.post('/item',async(req,res)=>{
    try{
      const data=req.body;
      const newitem=new item(data);
      const response=await newitem.save();
      console.log('item is saved...');
      res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error...'});
    }
});

//create get method for item

router.get('/item',async(req,res)=>{
    try{
     const response=await item.find();
     console.log('item is founded...');
     res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error...'});
    }
});

//create delete method for item

router.delete('/item/:id',async(req,res)=>{
    try{
      const itemId=req.params.id;
      const response=await item.findByIdAndDelete(itemId);
      if(!response){
        return res.status(404).json('item is not found...');
       }
      console.log('item is deleted...');
      res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error...'});
    }
});

//create put or patch method for item

router.patch('/item/:id',async(req,res)=>{
    try{
       const itemdata=req.body;
       const itemid=req.params.id;
       const response=await item.findByIdAndUpdate(itemid,itemdata,{
        new:true,
        RunValidator:true
       });
       if(!response){
        return res.status(404).json('item is not found...');
       }
       console.log('Item is updated...');
       res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error...'});
    }
});
module.exports=router;