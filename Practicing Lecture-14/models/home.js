const fs=require("fs")
const path=require("path")
const rootDir=require("../utils/utilPath")
const { data } = require("autoprefixer")
const registeredHome=[]
module.exports=class Home{
  constructor(houseName,price,rating,location,photoURL){
    this.houseName=houseName;
    this.price=price;
    this.rating=rating;
    this.location=location;
    this.photoURL=photoURL
  }
  save(){
    Home.fetchAll((registeredHome)=>{
    registeredHome.push(this)
    const filepath=path.join(rootDir,"data","home.json")
    fs.writeFile(filepath,JSON.stringify(registeredHome),(err)=>{
        console.log(err)
    })
    })
  }
  static fetchAll(callback){
    const filepath=path.join(rootDir,"data","home.json")
    fs.readFile(filepath,(err,data)=>{
      callback(!err ? JSON.parse(data) : [])
    })
  }
}