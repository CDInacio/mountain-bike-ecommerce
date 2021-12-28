const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductModel = new Schema(
  {
    department: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    usage: {
      type: String,
    },
    brand: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
    },
    specification: {
      type: Array,
    },
    discription: {
      type: String,
    },
    imageUrl: { 
      type: String 
    },
    tags: {
      type: Array,
    },
  },
  {
    timesStamps: true,
  }
);

const Product = mongoose.model("Product", ProductModel);

module.exports = Product;
