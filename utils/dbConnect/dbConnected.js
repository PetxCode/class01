const mongoose = require("mongoose");

const url = "mongodb://localhost/myUsers";

const myConnect = () => {
  mongoose.connect(url).then(() => {
    console.log("database now connected");
  });
};

export default myConnect;
