import express from "express";

const router = express.Router();

router.get("/message/:id", recieveMessage),
router.post("/message/:id", sendMessage),
router.delete("/message/:id", deleteMessage)

export default Message;