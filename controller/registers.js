const data=require("../models/registerdata");   
exports.getregister=(req,res,next)=>{
    res.render("register");
}
exports.postregister=(req,res,next)=>{
    // data is coming from form in register.ejs file and we are destructuring it here
    const {name,email,password}=req.body;
    // creating a new user using the data model and saving it to the array
    const newUser=new data(name,email,password);
    newUser.save();
    res.render("login");
}
