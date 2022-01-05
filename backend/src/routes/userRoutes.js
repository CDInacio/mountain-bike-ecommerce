const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

// sign user up
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password)
      return res.json({
        message: "Por favor, informe todos os campos.",
        severity: "error",
      });

    let user = await User.findOne({ email: email });
    if (user)
      return res.json({ message: "Usuário ja cadastrado!", severity: "error" });

    await User.create({
      name,
      email,
      password,
    });
    return res.json({
      message: "Usuário cadastrado com sucesso!",
      severity: "success",
    });
  } catch (error) {
    res.json(error);
  }
});

// sign user in
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.json({
        message: "Por favor, informe todos os campos.",
        severity: "error",
      });

    const user = await User.findOne({ email: email });
    if (!user)
      return res.json({
        message: "Usuário não cadastrado.",
        severity: "error",
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({
        message: "Email ou senha inválido.",
        severity: "error",
      });

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "4d" }
    );

    return res.json({ ...user._doc, accessToken, status: 200 });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
