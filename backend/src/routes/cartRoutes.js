const express = require("express");
const router = express.Router();
const { isAuthorized, isAuth, isAdmin } = require("../middleware/auth");

const Cart = require("../models/Cart");

// create cart
router.post("/", isAuth, async (req, res) => {
  const cart = new Cart(req.body);
  try {
    const newCart = await cart.create();
    res.json(newCart);
  } catch (error) {
    res.json(error);
  }
});

// update cart
router.post("/update/:id", isAuthorized, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndDelete(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedCart);
  } catch (error) {
    res.json(error);
  }
});

// delete cart
router.delete("/delete/:id", isAuthorized, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json("Usuário deletado");
  } catch (error) {
    res.json(error);
  }
});

// fetch users cart
router.get("/fetch/:userId", isAuthorized, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart);
  } catch (error) {
    res.json(error);
  }
});

// fetch all cart data
router.get("/", isAuthorized, async (req, res) => {
  try {
    const cart = await Cart.find();
    res.json(cart);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
