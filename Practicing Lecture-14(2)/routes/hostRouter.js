const express=require("express")
const path=require("path")
const rootDir=require("../utils/utilspath")
const hostRouter=express.Router()
const hostController=require('../controllers/hostController')

hostRouter.get("/add-home",hostController.getAddHome)

hostRouter.post("/add-home",hostController.getHomeAdd)

hostRouter.get("/host-home-list",hostController.getHostHomeList)

exports.hostRouter=hostRouter