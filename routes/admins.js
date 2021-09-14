const express = require("express");
const router = express.Router();
const admins = require("../controllers/admins");
const catchAsync = require("../utilities/catchAsync");

router.post("/", admins.createOne);

module.exports = router;
