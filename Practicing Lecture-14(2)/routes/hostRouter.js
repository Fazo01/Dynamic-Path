const express=require("express")
const path=require("path")
const rootDir=require("../utils/utilspath")
const hostRouter=express.Router()

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","addHome.html"))
})
hostRouter.post("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","homeadd.html"))
})

module.exports=hostRouter