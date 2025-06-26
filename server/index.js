import express from 'express'
import cors from 'cors'
import userRegister from './userSeed.js'
import authRouter from './routes/auth.js'



const app = express()
app.use(cors());
app.use(express.json())
app.use('/api/auth', authRouter)

userRegister();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`server is running on port ${process.env.PORT}`)

    
})