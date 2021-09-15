const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const ExpressError = require("./utilities/expressError");
const admins = require("./routes/admins");
const areas = require("./routes/areas");
const checkouts = require("./routes/checkouts");
const products = require("./routes/products");
const users = require("./routes/users");
const warehouses = require("./routes/warehouses");

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

app.use("/api/v1/admins", admins);
app.use("/api/v1/areas", areas);
app.use("/api/v1/checkouts", checkouts);
app.use("/api/v1/products", products);
app.use("/api/v1/users", users);
app.use("/api/v1/warehouses", warehouses);

app.use("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Server Error" } = err;
  res.status(statusCode).json(message);
});
