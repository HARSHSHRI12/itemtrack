const mongoose=require('mongoose');
require('dotenv').config();
const mongourl=process.env.mongourl;
mongoose.connect(mongourl);

const dbserver=mongoose.connection;
dbserver.on('connected',()=>{
    console.log('Database server connected...');
});
dbserver.on('disconnected',()=>{
    console.log('Database server disconnected...');
});
dbserver.on('err',(err)=>{
    console.log('internal Database error:',err);
});
module.exports=dbserver;