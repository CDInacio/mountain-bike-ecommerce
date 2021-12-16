const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/single/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.json(error);
  }
});

router.get("/", async (req, res) => {
  const category = req.query.category;
  const department = req.query.department;
  try {
    let products;
    if (department) {
      products = await Product.find({ department: department });
    } else if (category) {
      products = await Product.find({ category: category });
    }
    res.json(products);
  } catch (error) {
    res.json(error);
  }
});

// add item to cart
router.post("/api/cart/add", async (req, res) => {});

module.exports = router;
