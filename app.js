//env file
require("dotenv").config();

//imports
const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const reports = require("./routes/reports");
const test = require("./routes/test");
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("hello my friends");
});
app.use("/reports", reports);
app.use("/test", test);

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
