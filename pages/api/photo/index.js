const imageModel = require("../../../utils/models/photoModel");
const bodyParser = require("body-parser");
const nc = require("next-connect");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dry8nywub",
  api_key: "629241972579982",
  api_secret: "Pc2-culzxkssn7oX8SIZoMLR6vc"
});

export const config = {
  api: {
    bodyParser: false
  }
};

const url = "mongodb://localhost/myUsers";

mongoose.connect(url).then(() => {
  console.log("database now connected");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  }
});

const upload = multer({ storage: storage }).single("avatar");

const handler = nc();

handler.get(async (req, res) => {
  try {
    const getUsers = await imageModel.find({});
    res.status(200).json({ message: "found", data: getUsers });
  } catch (err) {
    res.status(400).json({ message: "Error" });
  }
});

handler.use(upload);

handler.post(async (req, res) => {
  try {
    const { userName, course } = req.body;
    console.log(req.file.path);

    const imageUploaded = await cloudinary.uploader.upload(req.file.path);
    console.log(imageUploaded);

    const getUsers = await imageModel.create({
      userName,
      course,
      image: imageUploaded.secure_url,
      imageID: imageUploaded.public_id
    });
    res.status(200).json({ message: "created", data: getUsers });
  } catch (err) {
    res.status(400).json({ message: "Error" });
  }
});

export default handler;
