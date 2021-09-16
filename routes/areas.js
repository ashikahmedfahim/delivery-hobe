const express = require("express");
const router = express.Router();
const areas = require("../controllers/areas");
const { isAuthenticated, isAuthorizedAsAdmin } = require("../middlewares");
const catchAsync = require("../utilities/catchAsync");

router.post(
  "/",
  isAuthenticated,
  isAuthorizedAsAdmin,
  catchAsync(areas.createOne)
);

module.exports = router;
