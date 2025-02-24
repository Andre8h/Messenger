import User from "../models/user.model.js";

export const get = (req,res) => {
    try {

        const {senderId,receiverId,text,image} = req.body
        if(!text){
            res.status(400).json({message: "You have to include a message"})
        }

    } catch (error) {
        console.log("Error in Message controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}