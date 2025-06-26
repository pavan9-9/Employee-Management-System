import jwt from "jsonwebtoken";
import User from "../models/User.js";

const verifyUser = async (req, res, next) => {
    try {
        // Check if authorization header exists
        if (!req.headers.authorization) {
            return res.status(401).json({ success: false, error: "Authorization header missing" });
        }

        // Extract token
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, error: "Token not provided" });
        }

        // Verify token
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        // Find user (don't return password)
        const user = await User.findById(decode._id).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        // Attach user to request and continue
        req.user = user;
        next();
        
    } catch (error) {
        // Handle different error cases
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, error: "Invalid token" });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, error: "Token expired" });
        }
        console.error("Authentication error:", error);
        return res.status(500).json({ success: false, error: "Authentication failed" });
    }
};

export default verifyUser;