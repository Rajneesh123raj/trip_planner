// core modueles
const fs=require("fs");
const path=require("path");
// const rootdir=require("../util/path");
// fake data 
let regdata=[];
module.exports=class registerdata{

  constructor(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
  }
 save(){
  regdata.push(this);
  const homedatapath=path.join(__dirname,"../data/regdata.json");
  // stringify ka matlab hai ki data ko string me convert karna hai taki usko file me write kar sake
  fs.writeFile(homedatapath,JSON.stringify(regdata),(err)=>{
    if(err){
      console.log("error in writing file ",err);
    } else{
      console.log("file written successfully");
    }   
  });
 }
  // static fetchall(){
  //   const homedatapath=path.join(__dirname,"../data/regdata.json");
  //   // read file ka matlab hai ki file se data ko read karna hai taki usko use kar sake
  //   fs.readFile(homedatapath,(err,data)=>{
  //     if(!err){
  //       regdata=JSON.parse(data);
  //     }
  //     return regdata;
  //   });
  // }
}