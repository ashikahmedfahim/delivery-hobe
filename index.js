const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const products = require("./routes/products");
const admins = require("./routes/admins");
const users = require("./routes/users");

const port = process.env.PORT || 8000;
const MongoDB = process.env.DB;

mongoose
  .connect(MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

app.use("/api/v1/products",products);
app.use("/api/v1/admins",admins); 
app.use("/api/v1/users",users); 
app.use("/api/v1/checkouts",users); 

