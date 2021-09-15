const express = require("express");
const router = express.Router();
const catchAsync = require("../utilities/catchAsync");
const checkouts = require("../controllers/checkouts");

router.post("/", catchAsync(checkouts.SaveOrder));

module.exports = router;