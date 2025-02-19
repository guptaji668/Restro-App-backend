import { Router } from "express";
import Users from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const router = Router();

router.post("/user", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user
    const user = await Users.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Generate JWT
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({error:false, message: 'Login successful', token:token ,user:user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
 
});

export default router;
