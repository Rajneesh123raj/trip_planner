const path = require('path');
const express = require('express');
const {userrouter} = require('./routes/user');
const homerouter = require('./routes/home');
const aboutrouter=require('./routes/about');
const {registerrouter} = require('./routes/register');
const app = express();
app.set("view engine","ejs");
app.set("views","views");
app.use("/",(req,res,next)=>{
    // console.log(req.url,req.method);
    next();
});
app.use("/",homerouter);
app.use("/register",registerrouter);
app.use("/user",userrouter);
app.use("/about",aboutrouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});
const port = 3000;;
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})