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
      const getUsers = await userModel.findById(req.query.id);
      res.status(200).json({ message: "found Single data", data: getUsers });
    }
    if (method === "PATCH") {
      const getUsers = await userModel.findByIdAndUpdate(
        req.query.id,
        { course: req.body.course },
        { new: true }
      );
      res.status(200).json({ message: "Updated", data: getUsers });
    }
    if (method === "DELETE") {
      const getUsers = await userModel.findByIdAndRemove(
        req.query.id,
        req.body
      );
      res.status(200).json({ message: "Deleted" });
    }
  } catch (err) {
    res.status(400).json({ message: "An error was found", data: err.message });
  }
};

export default handler;
