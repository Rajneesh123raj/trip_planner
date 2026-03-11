// const data = require("../models/registerdata");
const express = require('express');
homerouter = express.Router();
homerouter.get("/",async (req,res,next)=>{
// {    const content = await data.fetchAll();
    // console.log(content);
    res.render("respons");
});
module.exports = homerouter;