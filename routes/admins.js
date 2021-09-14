const express = require("express");
const router = express.Router();
const admins = require("../controllers/admins");
const auth = require("../controllers/auth");
const catchAsync = require("../utilities/catchAsync");

router.post("/", catchAsync(admins.createOne));
router.post("/auth", catchAsync(auth.adminLogin));

module.exports = router;
