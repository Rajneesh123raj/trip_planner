exports.getuser=(req,res,next)=>{
    res.render("login");
}
const users=[];
exports.postuser=(req,res,next)=>{
      users.push({email:req.body.email,
          password:req.body.password
      });
      res.render("login");
}
exports.users=users;