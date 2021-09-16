const Checkout = require("../models/checkouts");
const Product = require("../models/products");
const validators = require("../utilities/dataValidators");
const ExpressError = require("../utilities/expressError");
const { asyncForEach } = require("../utilities/async");

module.exports.SaveOrder = async (req, res) => {
  const isValidData = validators.isValidCheckoutObject(req.body);
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const order = new Checkout({
    user: req.credentials._id,
    items: [...req.body.items],
  });
  const result = await order.save();
  if (!result) throw new ExpressError(500, "Internal Server Error");
  await asyncForEach(order.items, async (item) => {
    let product = await Product.findById(item.productId);
    let r = await Product.findByIdAndUpdate(
      { _id: item.productId },
      { $set: { inventory: (product.inventory - item.quantity) } }
    );
  });
  res.send("Order has been placed");
};
