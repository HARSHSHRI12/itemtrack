const passport=require('passport');
const localStrategy=require('passport-local').Strategy;
const item=require('./models/item');
passport.use(new localStrategy(async(USERNAME,password,done)=>{
    try{
  
    const user=await item.findOne({username:USERNAME});
    if(!user){
        return done(null,false,{message:'Invalid username...'});
    }
    const ispasswordmatch=user.password===password ? true : false;
    if(ispasswordmatch){
      return done(null, user);
    }
    else{
        return done(null, false, {message:'Invalid password...'});
    }
    }
    catch(err){
        return done(err);
    }
}));

module.exports=passport;