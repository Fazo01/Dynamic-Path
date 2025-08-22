const Home = require("../models/home")

exports.getAddHome=(req,res,next)=>{
  res.render("host/addHome",{pageTitle:"Add Home",currentPage:"addhome"})
}
const registeredHome=[]
exports.getHomeAdd=(req,res,next)=>{
  // console.log(req.body)
  const{houseName,price,location,rating,photoURL}=req.body
  const home=new Home(houseName,price,location,rating,photoURL)
  home.save()
  registeredHome.push(req.body)
  res.render("host/home-added",{pageTitle:"Home Add",currentPage:"addhome"})
}
exports.getHostHomeList=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
    res.render("host/host-home-list",{registeredHome:registeredHome,pageTitle:"Host Home List",currentPage:"hostHomeList"})
  })
}
exports.registeredHome=registeredHome