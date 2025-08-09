import express from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import TraderbasesInput from "../models/userModels.js";

const router = express.Router();

router.post("/send", async (req, res) => {

  const { email, password } = req.body;

  try {
    const user = await TraderbasesInput.findOne({ email });


    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    


   const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res.status(400).json({ message: 'Incorrect Password' });
    }


    const token = jwt.sign({isUser : true , firstName : user.firstName}, process.env.JWT_SECRET, {expiresIn: '1d',});

    res.json({ token });

    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
