const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const products = require("./routes/products");

const port = process.env.PORT || 8000;
const MongoDB = process.env.DB;

mongoose
  .connect(MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

app.use("/api/v1/products",products);

