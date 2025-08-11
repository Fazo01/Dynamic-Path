const Home=require("../models/home")
const registeredHome=[]
exports.getIndex=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
      res.render("store/index",{pageTitle:"airbnb",registeredHome:registeredHome,currentPage:"Index"})
  })
}
exports.getHome=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
      res.render("store/home-list",{pageTitle:"Home List",registeredHome:registeredHome,currentPage:"Home"})
  })
}
exports.getBookings=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
  res.render("store/bookings",{pageTitle:"My bookings",registeredHome:registeredHome,currentPage:"bookings"})
  })
}
exports.getFavourite=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
  res.render("store/favourite-list",{pageTitle:"My favourite",registeredHome:registeredHome,currentPage:"favourite"})
  })
}
exports.registeredHome=registeredHome