const express = require("express");
const router = express.Router();
const { isAuthenticated, isAuthorizedAsAdmin } = require("../middlewares");
const checkouts = require("../controllers/checkouts");
const catchAsync = require("../utilities/catchAsync");

router.post("/", isAuthenticated, catchAsync(checkouts.SaveOrder));

module.exports = router;
