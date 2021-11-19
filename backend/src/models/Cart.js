const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  costumerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{
      productId: { type: String, required: true },
      totalQuantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
