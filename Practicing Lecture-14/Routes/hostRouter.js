const express=require("express")
const path=require("path")
const hostRouter=express.Router()
const rootDir=require("../utils/utilPath")
const hostController=require("../controller/hostController")
hostRouter.get("/add-home",hostController.getAddHome)

hostRouter.post("/add-home",hostController.getHomeAdd)
hostRouter.get("/edit-home",hostController.geteditHome)

hostRouter.get("/host-home-list",hostController.getHostHome)
module.exports=hostRouter