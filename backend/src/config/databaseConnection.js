const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

databaseConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Successfully Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = databaseConnection;
