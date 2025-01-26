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
const logrequest=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] request is made to : ${req.originalUrl}`);
    next();
}


//for import routes
const itemRoutes=require('./Routes/itemRoutes');

//for use 
app.use('/item',logrequest,itemRoutes);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log('Server is started...');
});