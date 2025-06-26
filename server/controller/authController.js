import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcrypt';

const login = async (req, res) => {  
    try {
        const { email, password } = req.body;
      
        if (!email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: "Email and password are required" 
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({  
                success: false, 
                message: "User not found"  
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ 
                success: false, 
                message: "Wrong password"  
            });
        }

        const token = jwt.sign(
            { 
                _id: user._id,  
                role: user.role  
            }, 
            process.env.JWT_SECRET,  
            { expiresIn: '10d' }
        );

        return res.status(200).json({
            success: true,
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,  
                role: user.role
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Internal server error" 
        });
    }
};

const verify = (req, res) =>{
    return res.status(200).json({success: true, user : req.user})
}

export  {login, verify};