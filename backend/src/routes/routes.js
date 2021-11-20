const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

//user routes
router.post("/api/register", userController.register);
router.post("/api/login", userController.login);
router.get("/userInfo", userController.getCurrentUser);

//products routes
router.get("/getProducts", productController.fetchProduct);
router.get("/singleproduct/:productName", productController.fetchSingleProduct);
router.get("/product/:department", productController.fetchByDep);
router.get("/component/suspension", productController.fetchSuspension);
router.get("/component/frame", productController.fetchFrame);

module.exports = router;
