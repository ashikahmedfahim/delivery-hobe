const express = require("express");
const router = express.Router();
const { isAuthenticated, isAuthorizedAsAdmin } = require("../middlewares");
const warehouses = require("../controllers/warehouses");
const catchAsync = require("../utilities/catchAsync");

router.post(
  "/",
  isAuthenticated,
  isAuthorizedAsAdmin,
  catchAsync(warehouses.createOne)
);

module.exports = router;
