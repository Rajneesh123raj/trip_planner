const express = require('express');
homerouter = express.Router();
homerouter.get("/",(req,res,next)=>
{
    res.render("respons");
});
module.exports = homerouter;