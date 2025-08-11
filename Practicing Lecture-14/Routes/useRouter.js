const express=require("express")
const useRouter=express.Router()
const path=require("path")
const {registeredHome}=require("../controller/hostController")
const rootDir=require("../utils/utilPath")
const hostController=require("../controller/hostController")
useRouter.get("/",hostController.getHome)
module.exports=useRouter