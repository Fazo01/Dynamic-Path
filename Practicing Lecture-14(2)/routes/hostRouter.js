const express=require("express")
const path=require("path")
const rootDir=require("../utils/utilspath")
const hostRouter=express.Router()
const hostController=require('../controllers/hostController')

hostRouter.get("/add-home",hostController.getAddHome)

hostRouter.post("/add-home",hostController.getHomeAdd)

exports.hostRouter=hostRouter