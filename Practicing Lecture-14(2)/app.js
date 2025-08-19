const express=require('express')
const app=express()
const path=require("path")
const rootDir=require("./utils/utilspath")
const storeRouter=require("./routes/storeRouter")
const {hostRouter}=require("./routes/hostRouter")
app.set("view engine","ejs")
app.set("views","views")
app.use(express.static(path.join(rootDir,"public")))

app.use(express.urlencoded())
app.use((req,res,next)=>{
  console.log(req.url)
  next()
})
app.use(storeRouter)
app.use("/host",hostRouter)
app.use((req,res,next)=>[
  res.status(404).render("page_404")
])

const POST=3000
app.listen(POST,()=>{
  console.log(`Server link http://localhost:${POST}` )
})