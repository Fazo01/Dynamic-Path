const Home = require("../models/home")
const {registeredHome}=require("./hostController")
exports.getIndex=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
    res.render("store/index",{registeredHome:registeredHome,pageTitle:"Home",currentPage:"home"})
  })
}
exports.getHomeList=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
    res.render("store/home-list",{registeredHome:registeredHome,pageTitle:"Home List",currentPage:"Home"})
  })
}
exports.getBooking=(req,res,next)=>{
    res.render("store/bookings",{pageTitle:"Booking",currentPage:"bookings"})
}
exports.getFavourite=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
    res.render("store/favourite-list",{registeredHome:registeredHome,pageTitle:"Favourite",currentPage:"favourite"})
  })
}