const jwt = require("jsonwebtoken");

const Cart = require("../models/Cart");

module.exports.addToCart = async (req, res) => {
  const { items } = req.body;
  try {
    let token = req.headers.authorization.split(" ")[1];
    let payload = jwt.verify(token, "123");
    const costumerEmail = payload.email;
    const cartData = await Cart.findOne({ costumerEmail: costumerEmail });
    const cart = {
      items,
      costumerEmail,
    };
    if (cartData === null) {
      await Cart.create(cart);
    } else {
      await Cart.updateOne({ costumerEmail: costumerEmail }, cart);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.fetchCartData = async (req, res) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    let payload = jwt.verify(token, "123");
    const cart = await Cart.findOne({ costumerEmail: payload.email });
    if (!cart) {
      return;
    }
    return res.json(cart);
  } catch (error) {
    console.log(error);
  }
};
