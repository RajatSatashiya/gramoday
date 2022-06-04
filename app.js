//env file
require("dotenv").config();

const { urlencoded } = require("express");
//imports
const express = require("express");
const { default: mongoose } = require("mongoose");
const reports = require("./routes/reports");
const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("hello my friends");
});
app.use("/reports", reports);

//mongoose connection
mongoose
  .connect(process.env.ATLAS_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("database connected");
  });

//start the server
var PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log("listening to " + PORT);
});
