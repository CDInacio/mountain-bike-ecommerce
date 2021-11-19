const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

module.exports.register = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });

    if (user) return res.json({ message: "Email já cadastrado!" });

    user = await User.create({ fullname, email, password });

    return res.json({ status: 200 });
  } catch (error) {
    return res.json({ message: "Algo deu errado!" });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user)
      return res.json({ message: "Usuário não cadastrado!" });

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch)
      return res.json({ message: "Email e/ou senha incorretos." });

    const token = jwt.sign(
      {
        fullname: user.fullname,
        email: user.email,
      },
      "123"
    ); 

    return res.json({
      status: 200,
      fullname: user.fullname,
      email: user.email,
      user: token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getCurrentUser = async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const verifyToken = jwt.verify(token, "123");
    console.log(verifyToken);
  } catch (error) {}
};
