const userModel = require("../../../utils/models/userModel");
const dbConnected = require("../../../utils/dbConnect/dbConnected");

const mongoose = require("mongoose");

const url = "mongodb://localhost/myUsers";

mongoose.connect(url).then(() => {
  console.log("database now connected");
});

const handler = async (req, res) => {
  try {
    const { method } = req;
    if (method === "GET") {
      const getUsers = await userModel.find({});
      res.status(200).json({ message: "found", data: getUsers });
    }
    if (method === "POST") {
      const getUsers = await userModel.create(req.body);
      res.status(200).json({ message: "created", data: getUsers });
    }
  } catch (err) {
    res.status(400).json({ message: "An error was found", data: err.message });
  }
};

export default handler;
