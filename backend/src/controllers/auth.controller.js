import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../lib/utils.js'
import cloudinary from '../lib/cloudinary.js'

export const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body; 

        // input validation
        if (!fullName || !email || !password)
            return res.status(400).json({ message: "All fields are required." })

        if (password.length < 6)
            return res.status(400).json({ message: "Password must be at least 6 characters." });

        const user = await User.findOne({email})
        if (user)
            return res.status(400).json({ message: "Email already exists." });

        // hash password using bcryptjs ( password => iuy38723gf2938t293rt29dh9 )
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // create new user
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        })

        if (!newUser)
            return res.status(400).json({ message: "Invalid user data." });

        // generate JWT Token & add cookie to response
        const token = generateToken(newUser._id, res);

        // store new user in the database
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            profilePic: newUser.profilePic,
        })

    } catch (error) {
        console.error("Error in signup controller:", error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // validate input
        if (!email || !password)
            return res.status(400).json({ message: "All fields required." });

        // look up user
        const user = await User.findOne({email});

        if (!user)
            return res.status(400).json({ message: 'email or password is incorrect'});

        // check password
        const userIsValid = await bcrypt.compare(password, user.password)            

        if (userIsValid){
            // create JWT token and attach to res as cookie 
            generateToken(user._id, res);

            // send response 
            return res.status(200).json({
                _id: user._id,
                fullName: user.fullName, 
                email: user.email,
                profilePic: user.profilePic,
            })
        } 

        // otherwise, login failed
        return res.status(400).json({ message: "email or password is incorrect"});
        
    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const logout = async (req, res) => {
    try {
        // remove JWT token 
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.error("Error in logout controller:", error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { profilePic } = req.body;
        const userId = req.user._id;

        if (!profilePic)
            return res.status(400).json({ message: "Profile Picture is required." })

        // upload profile pic to cloundinary 
        const uploadResponse = await cloudinary.uploader.upload(profilePic);

        // upload profile pic link to mongoDB 
        if (uploadResponse){
            const updatedUser = await User.findByIdAndUpdate(
                userId, 
                { profilePic: uploadResponse.secure_url }, 
                { new: true });
            return res.status(200).json(updatedUser)
        }

        return res.status(400).json({ message: "Error occured while updating Profile Picture." })        
        
    } catch (error) {
        console.error("An error occured in updateProfile:", error)
        return res.status(500).json({ message: "Internal Server Error" })  
    }
}

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user)
    
    } catch (error) {
        console.error("An error occured in checkAuth:", error)
        return res.status(500).json({ message: "Internal Server Error" })  
    }
}