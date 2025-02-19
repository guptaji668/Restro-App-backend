import { Router } from "express";
import Orders from "../models/order.js"; 
import Users from "../models/user.js";
import MenuItems from "../models/menu.js";

const router = Router();


router.post("/place", async (req, res) => {
  try {
    const { user_id, item_id } = req.body;

    if (!user_id || !item_id) {
      return res.status(400).json({ error: true, message: "Missing user_id or item_id" });
    }

    // Create new order
    const newOrder = await Orders.create({
      user_id,
      item_id,
      status:1,
      order_date: new Date(),
    });

    return res.status(201).json({
      error: false,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Order Error:", error);
    res.status(500).json({ error: true, message: "Server error" });
  }
});



// Fetch order history for a specific user
router.get("/history/:userId", async (req, res) => {
  const { userId } = req.params;
// console.log("userod",userId)
  try {
    // Fetch orders and include menu item details
    const orders = await Orders.findAll({
      where: { user_id: userId },
      include: [
        {
          model: MenuItems,
          as: "items",
          attributes: ["name", "description", "price"],
        },
      ],
    });

    if (!orders.length) {
      return res.status(404).json({
        error: true,
        message: "No orders found for this user.",
        data: [],
      });
    }

    res.status(200).json({
      error: false,
      data: orders,
      message: "Order history fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching order history:", error);
    res.status(500).json({
      error: true,
      message: "Failed to fetch order history.",
    });
  }
});




export  default router

