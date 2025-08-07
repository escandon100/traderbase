import express from "express";
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import TraderbasesInput from "../models/userModels.js";

const router = express.Router()

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


router.post('/send', async (req, res) => {
  const { firstName, lastName, email, phone, password, country } = req.body;

  try {

    const hashedPassword = await bcrypt.hash(password , 10)
    const user = new TraderbasesInput({ firstName, lastName, email, phone, password:hashedPassword, country });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router