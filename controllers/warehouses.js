const Warehouse = require("../models/warehouses");
const validators = require("../utilities/dataValidators");
const ExpressError = require("../utilities/expressError");

module.exports.createOne = async (req, res) => {
  const isValidWarehouse = validators.isValidWarehouseObject(req.body);
  if (isValidWarehouse.error)
    throw new ExpressError(400, isValidWarehouse.error.message);
  const warehouse = new Warehouse(req.body);
  const result = await warehouse.save();
  if (!result) throw new ExpressError(500, "Internal server error");
  res.send(result);
};
