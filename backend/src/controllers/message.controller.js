import Message from '../models/message.model.js'
import User from '../models/user.model.js';
import { io, userSocketMap } from '../lib/socket.js';

// GET /users - get all users except self
export const getUsers = async (req,res) => {
    try {
        const userId = req.user._id;

        const users = await User.find({ _id: { $ne: userId } }).select("-password")

        if (users) 
            return res.status(200).json(users)
    } catch (error) {
        console.error("An error occured in getUsers:", error)
        return res.status(500).json({ message: "Internal Server Error" })  
    }
}

// GET /:id - get messages between user and :id contact 
export const getMessages = async (req,res) => {
    try {
        const { id:contactId } = req.params
        const userId = req.user._id 

        const messages = await Message.find({
            $or: [
                { senderId: contactId, receiverId: userId },
                { senderId: userId, receiverId: contactId }
            ]
        }).sort({ createdAt: -1 }) // sort newest -> oldest
        .limit(50) 
        
        return res.status(200).json(messages); 
    } catch (error) {
        console.error("An error occured in getUsers:", error)
        return res.status(500).json({ message: "Internal Server Error" })  
    }
}

// POST /send/:id - send message to :id contact 
export const sendMessage = async (req,res) => {
    try {
        const { id:receiverId } = req.params
        const senderId = req.user._id 
        const { text, image } = req.body; 

        let imageURL;
        if (image) {
            // upload image to cloudinary 
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageURL = uploadResponse.secure_url; 
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text, 
            image: imageURL,
        })

        // send message by adding it to the database
        await newMessage.save(); 

        // emit event to receiver id
        const receiverSocketId = userSocketMap[receiverId];
        if (receiverSocketId){
            // console.log("sending from server to receiver:", receiverSocketId)
            io.to(receiverSocketId).emit("newMessage", newMessage)
        } else {
            console.log("ERROR NOT sending from server to receiver")
        }

        return res.status(201).json(newMessage)
        
    } catch (error) {
        console.error("An error occured in sendMessage:", error)
        return res.status(500).json({ message: "Internal Server Error" })  
    }
}