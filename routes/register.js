import { Router } from "express";
import Users from "../models/user.js";
import bcrypt from "bcrypt";

const router = Router();

router.post("/user", async (req, res) => {
  const { name, email, password } = req.body;
  console.log("name", name, email, password);
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await Users.findOrCreate({
      where: {
        email: email,
      },
      defaults: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res
      .status(200)
      .json({error:false, message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

export default router;
