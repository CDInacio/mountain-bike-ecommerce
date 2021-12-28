require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./src/routes/productRoutes");
const userRoutes = require("./src/routes/userRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const checkoutRoute = require("./src/routes/stripeRoute");
const databaseConnection = require("../backend/src/config/databaseConnection");

databaseConnection();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
