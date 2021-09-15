const express = require("express");
const router = express.Router();
const checkouts = require("../controllers/checkouts");
const catchAsync = require("../utilities/catchAsync");

router.post("/", catchAsync(checkouts.SaveOrder));

module.exports = router;