import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const protectRoute = async (req, res, next) => {
    try {
        // check for JWT token
        const token = req.cookies.jwt 

        if (token) {
            // check if token is valid
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

            if (decodedToken){
                // fetch the user, using the _id provided in the token 
                // do not fetch the password 
                const user = await User.findById(decodedToken.userId).select("-password");

                if (user) {
                    req.user = user;    // will make user accessible to protected functions
                    next();
                }
            }
        }

        return res.status(401).json({ message: "Unauthorized"})

    } catch (error) {
        console.error("Error in protectRouter function:", error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}