const jwt = require("jsonwebtoken");

module.exports.auth = async (req, res, next) => {
  try {
    const token = req.header.authorization.split("")[1];

    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, process.env.TOKEN_SECRET);

      req.userId = decodedData?.id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};
