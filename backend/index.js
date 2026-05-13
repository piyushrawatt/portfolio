import { config } from "dotenv"
import express from "express"
import mongoose from "mongoose"
import save from "./routes/save.js"
import cors from "cors"
config()
let app = express()
app.use(cors({
   origin: "*"
}))

app.use(express.json())
app.use("/routes",save)
 
app.get("/",(req,res)=>{
   res.send("backend is running")
})
app.get("/test", (req,res)=>{
   res.send("test working")
})
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("db connect sucessfully")
})
.catch(()=>{
   console.log(" there is some error")
})
let port = process.env.PORT|| 8000
app.listen(port,()=>{
console.log(`server is started ${port}`)
})

