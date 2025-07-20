
const express=require('express')
const storeRouter=express.Router()

const Homecontroller=require("../controllers/storeController")//mvc

storeRouter.get("/",Homecontroller.getIndex)
storeRouter.get("/homes",Homecontroller.gethome)
storeRouter.get("/bookings",Homecontroller.getBookings)
storeRouter.get("/favourites",Homecontroller.getFavouriteList)

module.exports=storeRouter