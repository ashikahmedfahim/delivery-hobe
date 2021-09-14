const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const auth = require("../controllers/auth");
const catchAsync = require("../utilities/catchAsync");

router.post("/", catchAsync(users.createOne));
router.post("/auth", catchAsync(auth.userLogin));


module.exports = router;