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
exports.getHomeDetails=(req,res,next)=>{
  const homeId=req.params.homeId;
  console.log("At home details:",homeId)

  Home.findById(homeId,home=>{
    if(!home){
      console.log("Home not found")
      res.redirect("/Homes")
    }else{
      console.log("At home details:",home)
      res.render("store/home-detail",{home:home,pageTitle:"Home Details",currentPage:"home-details"})
    }
  })
}