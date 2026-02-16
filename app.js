const path = require('path');
const express = require('express');
const userrouter = require('./routes/user');
const homerouter = require('./routes/home');
const app = express();
app.use("/",(req,res,next)=>{
    console.log(req.url,req.method);
    next();
});
app.use(homerouter);
app.use("/user",userrouter);
const port = 3000;;
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})