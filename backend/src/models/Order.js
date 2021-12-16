const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: Object,
  },
  status: {
    type: Stirng,
    default: "Pending...",
  },
},
{ timesStamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
