const path=require('path');
const publicpath=path.join(__dirname,'../public');
 const express=require('express');
 var app=express();
var port=process.env.PORT || 3000;


 app.use(express.static(publicpath));
 app.listen(port,()=>{
   console.log("server is up");
 })
