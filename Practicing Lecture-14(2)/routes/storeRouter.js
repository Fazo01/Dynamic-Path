const express=require("express")
const path=require("path")
const rootDir=require("../utils/utilspath")
const storeRouter=express.Router()

storeRouter.use((req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","home.html"))
})
module.exports=storeRouter