
import savedata from "../controller/create.js"
import mailcontroller from "../controller/mailcontroller.js"
import express from "express"
  const router = express.Router()
 router.post("/save",savedata)
 router.post("/gmail",mailcontroller)
export default router