const cart = require("../models/Cart");

module.exports.addToCart = async (req, res) => {
  const { items, totalQuantity, costumerId } = req.body;
  await cart.create({
    items,
    totalQuantity,
    costumerId
  });
};
