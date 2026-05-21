import express from "express";
import { sendMessage } from "../controller/mailcontroller.js";

const router = express.Router();

router.post("/contact", sendMessage);

export default router;