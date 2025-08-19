
exports.getAddHome=(req,res,next)=>{
  res.render("addHome",{pageTitle:"Add Home",currentPage:"addhome"})
}
const registeredHome=[]
exports.getHomeAdd=(req,res,next)=>{
  console.log(req.body)
  registeredHome.push(req.body)
  res.render("homeadd",{pageTitle:"Home Add",currentPage:"addhome"})
}
exports.registeredHome=registeredHome