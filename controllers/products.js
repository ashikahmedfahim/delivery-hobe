const Product = require("../models/products");
const validators = require("../utilities/dataValidators");
const ExpressError = require("../utilities/expressError");

module.exports.getAll = async (req, res) => {
  const result = await Product.find({});
  if (!result) throw new ExpressError(500, "Internal Server Error");
  res.send(result);
};
module.exports.createOne = async (req, res) => {
  const isValidProduct = validators.isValidProductObject(req.body);
  if (isValidProduct.error)
    throw new ExpressError(400, isValidProduct.error.message);
  const product = new Product({ ...req.body });
  const result = await product.save();
  if (!result) throw new ExpressError(500, "Internal Server Error");
  res.send(result);
};
module.exports.updateOne = async (req, res) => {
  const isValidProductId = validators.isValidObjectId(req.params.id);
  if (isValidProductId.error)
    throw new ExpressError(400, isValidProductId.error.message);
  const isValidProductUpdateData = validators.isValidProductUpdateData(req.body);
  if (isValidProductUpdateData.error)
    throw new ExpressError(400, isValidProductUpdateData.error.message);
  const result = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!result) throw new ExpressError(500, "Internal Server Error");
  res.send(result);
};
module.exports.getSearched = async (req, res) => {};
