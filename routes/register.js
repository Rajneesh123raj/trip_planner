const express = require('express');
const registerrouter = express.Router();
const registercontroller= require('../controller/registers');
registerrouter.use(express.urlencoded({extended:true}));
registerrouter.get("/",registercontroller.getregister);
registerrouter.post("/",registercontroller.postregister);
exports.registerrouter = registerrouter;
