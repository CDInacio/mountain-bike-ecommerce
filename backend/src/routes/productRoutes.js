const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// fetch product
router.get("/single/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.json(error);
  }
});

// fetch product based on some patameters
router.get("/", async (req, res) => {
  const category = req.query.category;
  const department = req.query.department;
  const brand = req.query.brand;
  try {
    let products;
    if (department) {
      products = await Product.find({ department: department });
    } else if (category) {
      products = await Product.find({ category: category });
    } else if (brand) {
      products = await Product.find({ brand: brand });
    }
    res.json(products);
  } catch (error) {
    res.json(error);
  }
});

// search functionality for products
router.get("/search/:query", async (req, res) => {
  const query = req.params.query;
  try {
    const data = await Product.find({ tags: query.toLowerCase() });
    if (data) {
      return res.json(data);
    }
  } catch (error) {
    console.log(error);
  }
});

// get all brands
router.get("/brands", async (req, res) => {
  try {
    const data = await Product.find({}).distinct('brand');
    if (data) {
      return res.json(data)
    }
  } catch (error) {}
});

module.exports = router;
