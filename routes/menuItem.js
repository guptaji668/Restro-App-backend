import { Router } from "express";
import dotenv from "dotenv"
import MenuItems from "../models/menu.js";
dotenv.config()

const router = Router();

router.get("/items", async (req, res) => {

  try {
    const item =await MenuItems.findAll()
      // If no vehicles are found, return a 404 error
      if (item?.length === 0) {
        return res.status(404).json({error:true, message: "No menu item found " });
      }
  
      return res.status(200).json({
        error:false,
        message:"Menu Items Fetched Successfully!",
        data: item
      })
   

  } catch (error) {
    res.status(500).json({ message: 'Error while fetching the menu items', error });
  }
 
});

export default router;