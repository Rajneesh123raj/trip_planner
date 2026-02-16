const express = require('express');
const path = require('path');
const userrouter = express.Router();
userrouter.use(express.urlencoded({extended:true}));
userrouter.get("/login",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../views/login.html"));
});
userrouter.post("/login",(req,res,next)=>{
    console.log("post chal rahi hai login ke route par ");
    console.log(req.body);
    res.sendFile(path.join(__dirname,"../views/respons.html"));
});
module.exports = userrouter;