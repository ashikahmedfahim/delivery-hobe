const express = require("express");
const router = express.Router();
const products = require("../controllers/products");
const catchAsync = require("../utilities/catchAsync");

router.get("/", catchAsync(products.getAll));
router.post("/", catchAsync(products.createOne));
router.patch("/:id", catchAsync(products.updateOne));
router.get("/search/", catchAsync(products.getSearched))

module.exports = router;
