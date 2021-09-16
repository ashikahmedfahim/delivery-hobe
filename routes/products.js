const express = require("express");
const router = express.Router();
const { isAuthenticated, isAuthorizedAsAdmin } = require("../middlewares");
const products = require("../controllers/products");
const catchAsync = require("../utilities/catchAsync");

router.get("/", catchAsync(products.getAll));
router.post(
  "/",
  isAuthenticated,
  isAuthorizedAsAdmin,
  catchAsync(products.createOne)
);
router.patch(
  "/:id",
  isAuthenticated,
  isAuthorizedAsAdmin,
  catchAsync(products.updateOne)
);
router.get("/search/", catchAsync(products.getSearched));

module.exports = router;
