const express = require("express");
const router = express.Router();
const { isAuth } = require("../middleware/auth");

const Cart = require("../models/Cart");

router.get("/", isAuth, async (req, res) => {
  try {
    const userCart = await Cart.find({ userId: req.user.id });
    if (userCart) {
      return res.json(userCart);
    } else {
      return res.json("Voçê ainda não tem produtos no carrinho.");
    }
  } catch (error) {
    return res.json(error);
  }
});

router.post("/add", isAuth, async (req, res) => {
  const userId = req.user.id;
  let products = req.body;
  console.log(products)
  try {
    let existingCart = await Cart.findOne({ userId });
    if (existingCart) {
      let filter = { userId: userId };
      let update = { products: products };
      await Cart.findOneAndUpdate(filter, update);
    } else {
      const newCart = await Cart.create({ products, userId });
      return res.json(newCart);
    }
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
