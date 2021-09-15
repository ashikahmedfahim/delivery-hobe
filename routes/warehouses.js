const express = require("express");
const router = express.Router();
const warehouses = require("../controllers/warehouses");
const catchAsync = require("../utilities/catchAsync");

router.post("/", catchAsync(warehouses.createOne));

module.exports = router;
