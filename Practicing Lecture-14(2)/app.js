const express=require('express')
const app=express()
const path=require("path")
const rootDir=require("./utils/utilspath")
const hostRouter=require("./routes/hostRouter")
const storeRouter=require("./routes/storeRouter")

app.set("view engine","ejs")
app.set("views","views")
app.use(express.static(path.join(rootDir,"public")))

app.use(express.urlencoded())

app.use(storeRouter)
app.use("/host",hostRouter)
app.use((req,res,next)=>[
  res.sendFile(path.join(rootDir,"Views","page_404"))
])
const POST=3000
app.listen(POST,()=>{
  console.log(`Server link http://localhost:${POST}` )
})