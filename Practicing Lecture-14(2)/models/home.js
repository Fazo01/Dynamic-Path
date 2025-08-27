const fs=require("fs")
const path=require("path")
const rootDir=require("../utils/utilspath")
const { error } = require("console")
const filepath=(path.join(rootDir,"data","home.json"))
const registeredHome=[]
module.exports=class Home{
  constructor(houseName,price,location,rating,photoURL){
    this.houseName=houseName
    this.price=price
    this.location=location
    this.rating=rating
    this.photoURL=photoURL
  }

  save(){
    this.id=Math.random().toString()
    Home.fetchAll((registeredHome)=>{
      
      registeredHome.push(this)
      fs.writeFile(filepath,JSON.stringify(registeredHome),(error)=>{
        console.log("File Writing Conclude: ",error)
      })
    })
  }
  static fetchAll(callback){
    fs.readFile(filepath,(err,data)=>{
      callback(!err?JSON.parse(data):[])
    })
  }
  static findById(homeId,callback){
    this.fetchAll(homes=>{
      const homefound=homes.find(home=>home.id===homeId)
      callback(homefound)
    })
  }
}