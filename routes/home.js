const express = require('express');
homerouter = express.Router();
const path = require('path');
homerouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../views/respons.html"));
});
module.exports = homerouter;