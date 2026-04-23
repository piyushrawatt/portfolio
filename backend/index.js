import { config } from "dotenv"
import express from "express"
import mongoose from "mongoose"
import save from "./routes/save.js"
import cors from "cors"
config()
let app = express()

app.use(cors({
   origin:"*"
}))
app.use(express.json())
app.use("/routes",save)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("db connect sucessfully")
})
.catch(()=>{
   console.log(" there is some error")
})
let PORT = process.env.port|| 4000
app.listen(PORT,()=>{
console.log(`server is started ${PORT}`)
})

