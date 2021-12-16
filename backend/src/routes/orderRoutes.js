const express = require("express");
const router = express.Router();
const { isAuthorized, isAuth, isAdmin } = require("../middleware/auth");

const Order = require("../models/Order");

// create order
router.post("/", isAuth, async (req, res) => {
  const order = new Order(req.body);
  try {
    const neworder = await Order.create();
    res.json(newCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update order
router.post("/update/:id", isAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndDelete(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete order
router.delete("/delete/:id", isAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json("Usuário deletado");
  } catch (error) {
    res.status(500).json(error);
  }
});

// fetch users order
router.get("/fetch/:userId", isAuthorized, async (req, res) => {
  try {
    const orders = await Order.findOne({ userId: req.params.userId });
    res.json(orders);
  } catch (error) {
    res.json(error);
  }
});

// fetch all orders
router.get("/", isAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
