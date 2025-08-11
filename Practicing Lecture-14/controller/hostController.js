const Home=require("../models/home")
const registeredHome=[]
exports.getAddHome=(req,res,next)=>{

  res.render("addHome",{pageTitle:"Add-Home",currentPage:"AddHome"})
}
exports.getHomeAdd=(req,res,next)=>{
  console.log(req.body)
  const{houseName,price,rating,location,photoURL}=req.body
  const home=new Home(houseName,price,rating,location,photoURL)
  home.save()
  registeredHome.push(req.body)
  res.render("homeadd",{pageTitle:"Home-Add",currentPage:"HomeAdd"})
}
exports.getHome=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
      res.render("home",{pageTitle:"Home",registeredHome:registeredHome,currentPage:"Home"})
  })

}
exports.registeredHome=registeredHome