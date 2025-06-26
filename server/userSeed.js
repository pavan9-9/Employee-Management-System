import User from "./models/User.js";
import bcrypt from 'bcrypt';
import connectToDatabase from "./db/db.js";

const userRegister = async () => {
    try {

        await connectToDatabase();
        const existingAdmin = await User.findOne({ email: "admin@gmail.com" });
        
 const hashPassword = await bcrypt.hash("Admin123", 10);
        
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        });

        if (!existingAdmin) {
            await newUser.save();
            console.log("Admin user created successfully");
           
        }else {
            console.log("Admin user already exists");
        }
       
    }
        
     catch (error) {
        console.error("Error creating admin user:", error.message);
     
    }
}
export default userRegister;