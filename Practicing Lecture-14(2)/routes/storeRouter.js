const express=require("express")
const path=require("path")
const rootDir=require("../utils/utilspath")
const storeRouter=express.Router()
const {registeredHome}=require("../controllers/hostController")
storeRouter.get("/",(req,res,next)=>{
  res.render("home",{registeredHome:registeredHome,pageTitle:"Home",currentPage:"home"})
})
module.exports=storeRouter