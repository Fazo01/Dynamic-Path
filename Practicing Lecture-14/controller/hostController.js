const Home=require("../models/home")
const registeredHome=[]
exports.getAddHome=(req,res,next)=>{
  res.render("host/addHome",{pageTitle:"Add-Home",currentPage:"AddHome"})
}
exports.getHostHome=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
      res.render("host/host-home-list",{pageTitle:"Host Home List",registeredHome:registeredHome,currentPage:"hostHomeList"})
  })
}
exports.getHomeAdd=(req,res,next)=>{
  console.log(req.body)
  const{houseName,price,rating,location,photoURL}=req.body
  const home=new Home(houseName,price,rating,location,photoURL)
  home.save()
  registeredHome.push(req.body)
  res.render("host/home-added",{pageTitle:"Home Add",currentPage:"HomeAdd"})
}
exports.geteditHome=(req,res,next)=>{
  res.render("host/edit-home",{pageTitle:"Edit Home",registeredHome:registeredHome,currentPage:"edit-home"})
}
exports.registeredHome=registeredHome