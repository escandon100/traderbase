import express from "express";
import mongoose from "mongoose"
import traderbasesInput from "../routes/register"


const router = express.Router()

router.post("/userLogin" , (req , res ) => {
    const {email , password} = req.body

    try{
        const user = await traderbasesInput.findOne({email})

        // if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        

    }

})




export default router

// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// import User from '../models/User.js'; // adjust path as needed

// dotenv.config();
// const router = express.Router();

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     // Create token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: '1d',
//     });

//     res.json({ token, user: { id: user._id, email: user.email, name: user.firstName } });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// export default router;
