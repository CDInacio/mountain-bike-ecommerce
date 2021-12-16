const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const { isAuthorized, isAdmin } = require("../middleware/auth");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.get("/createAdmin", async (req, res) => {
  try {
    const admin = new User({
      name: "Cláudio Dantas",
      email: "claudiodantas1996@gmail.com",
      password: process.env.ADMIN_PASSWORD,
      isAdmin: true,
    });
    const newUser = await admin.save();
  } catch (error) {
    res.send({ message: error.message });
  }
});

// register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password)
      res.status(400).json("Informe todos os campos!");

    let user = await User.findOne({ email: email });
    if (user) res.status(401).json("Usuário ja cadastrado!");

    user = await User.create({ name, email, password });
    res.json("Usuário cadastrado com sucesso!");
  } catch (error) {}
});

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) res.json("Usuário não cadastrado!");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) res.json("Email ou senha inválido");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "4d" }
    );

    res.json({ ...user._doc, accessToken });
  } catch (error) {
    res.json(error);
  }
});

// update uset
router.put("/update/:id", isAuthorized, async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        // take everything inside req.body and set it again
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    return res.json(error);
  }
});

// delete user
router.delete("/delete/:id", isAuthorized, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("Usuário deletado");
  } catch (error) {
    res.json(error);
  }
});

// get all cart data
router.get("/", isAdmin, async (req, res) => {
  try {
    const cart = await Cart.find();
    res.json(cart);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
