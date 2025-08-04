import express from "express";
import mongoose from "mongoose"


const router = express.Router()

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const traderbasesInputSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  password: String, // Ideally hash this before saving
  country: String,
});

const traderbasesInput  = mongoose.model("traderbasesInput",traderbasesInputSchema)


router.post('/send', async (req, res) => {
  const { firstName, lastName, email, phone, password, country } = req.body;

  try {
    const user = new traderbasesInput({ firstName, lastName, email, phone, password, country });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router