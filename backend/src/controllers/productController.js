const Product = require("../models/Product");

module.exports.fetchProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products) {
      return res.json(products);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.fetchSingleProduct = async (req, res) => {
  const { productName } = req.params;
  try {
    let product = await Product.findOne({ productName });
    if (!product) {
      return res.send({ status: 400, message: "Produto não encontrado" });
    }
    return res.json(product);
  } catch (error) {}
};

module.exports.fetchByDep = async (req, res) => {
  const { department } = req.params;
  try {
    // console.log(department)
    let products = await Product.find({ department: department });
    return res.json(products);
  } catch (error) {
    console.log(error);
  }
};

module.exports.fetchSuspension = async (req, res) => {
  try {
    let suspensions = await Product.find({ category: "Suspensao" });
    if (suspensions.length === 0) {
      console.log('err')
    }
    return res.json(suspensions);
  } catch (error) {
    console.log(error);
  }
};

module.exports.fetchFrame = async (req, res) => {
  try {
    let frame = await Product.find({ category: "Quadro" });
    console.log(frame)
    if (frame.length === 0) {
      console.log('err')
    }
    return res.json(frame);
  } catch (error) {
    console.log(error);
  }
};
