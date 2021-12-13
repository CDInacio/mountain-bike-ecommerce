const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  costumerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: {
    type: Object
  },
  totalQuantity: {
    type: Number
  },
  costumerEmail: {
    type: String
  }
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
