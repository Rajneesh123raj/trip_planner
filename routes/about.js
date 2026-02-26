const express = require('express');
// const aboutcontroller= require('../controller/abouts');
const aboutrouter = express.Router();
aboutrouter.get("/",(req,res,next)=>
{
    res.render("about");
});
module.exports = aboutrouter;