const Product = require("../models/products");
const validators = require("../utilities/dataValidators");
const ExpressError = require("../utilities/expressError");

module.exports.getAll = async (req, res) => {};
module.exports.createOne = async (req, res) => {
  const isValidProduct = validators.isValidProductObject(req.body);
  if (isValidProduct.error) throw new ExpressError(400, isValidProduct.error.message);
  const product = new Product({...req.body});
  const result = await product.save();
  if (!result) throw new ExpressError(500, "Internal Server Error");
  return res.send(result);
};
module.exports.updateOne = async (req, res) => {};
module.exports.getSearched = async (req, res) => {};
