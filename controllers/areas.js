const Area = require("../models/areas");
const validators = require("../utilities/dataValidators");
const ExpressError = require("../utilities/expressError");

module.exports.createOne = async (req, res) => {
  const isValidArea = validators.isValidAreaObject(req.body);
  if (isValidArea.error) throw new ExpressError(400, isValidArea.error.message);
  const area = new Area({ name: req.body.name });
  const result = await area.save();
  if (!result) throw new ExpressError(500, "Internal Server Error");
  res.send(result);
};
