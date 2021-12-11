const jwt = require("jsonwebtoken");

const Cart = require("../models/Cart");

module.exports.addToCart = async (req, res) => {
  const { items, totalQuantity, costumerEmail } = req.body;
  const cartData = await Cart.findOne({ costumerEmail: costumerEmail });
  const cart = {
    items,
    totalQuantity,
    costumerEmail,
  };
  if (cartData === null) {
    await Cart.create(cart);
  } else {
    await Cart.updateOne({ costumerEmail: costumerEmail }, cart);
  }
};
