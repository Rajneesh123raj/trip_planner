const express = require('express');
const userrouter = express.Router();
const usercontroller = require('../controller/users');
userrouter.use(express.urlencoded({extended:true}));
userrouter.get("/login",usercontroller.getuser);
userrouter.post("/login",usercontroller.postuser);
exports.userrouter=userrouter;
