const express=require('express');
const app=express();
require('dotenv').config();
const bodyparser=require('body-parser');
const dbserver=require('./dbserver');
const item=require('./models/item');
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send('Welcom back harsh...');
});
// //create post method for add info
// app.post('/item',async(req,res)=>{
//     try{
//         const data=req.body;
//         const newitem=new item(data);
//         const response=await newitem.save();
//         console.log('item is saved..');
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({err:'Internal server error'});
//     }
// });
// //create get method for extract data
// app.get('/item',async(req,res)=>{
//     try{
//      const response=await item.find();
//      console.log('item is founded...');
//      res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({err:'Internal server error...'});
//     }
// });

//for import routes
const itemRoutes=require('./Routes/itemRoutes');

//for use 
app.use(itemRoutes);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log('Server is started...');
});