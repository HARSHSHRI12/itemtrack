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


//for import routes
const itemRoutes=require('./Routes/itemRoutes');

//for use 
app.use(itemRoutes);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log('Server is started...');
});