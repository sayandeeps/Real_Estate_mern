const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const cors = require("cors");
app.use(cors());

app.listen(8800, () => {
  console.log("Backend Server is running on port 8800");
});
