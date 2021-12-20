const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  products: {
    type: Object
  },
  userId: {
    type: String,
  },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
