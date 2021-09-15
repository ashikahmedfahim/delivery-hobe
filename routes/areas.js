const express = require("express");
const router = express.Router();
const areas = require("../controllers/areas");
const catchAsync = require("../utilities/catchAsync");

router.post("/", catchAsync(areas.createOne));

module.exports = router;
