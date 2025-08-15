const fs=require("fs")
const path=require("path")
const rootDir=require("../utils/utilPath")
const { data } = require("autoprefixer")
const { error } = require("console")
const favouritefilepath=path.join(rootDir,"data","favourite.json")
module.exports=class Favourite{

  static addfavourite(homeId,callback){
    Favourite.getfavourite((favourites)=>{
      if(favourites.includes(homeId)){
        callback("Already added in favourites")
      }else{
        favourites.push(homeId)
        fs.writeFile(favouritefilepath,JSON.stringify(favourites),callback)
      }
    })
  }

  static getfavourite(callback){
    fs.readFile(favouritefilepath,(err,data)=>{
      callback(!err ? JSON.parse(data) : [])
    })
  }

}