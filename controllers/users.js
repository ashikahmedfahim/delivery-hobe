const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validators = require("../utilities/dataValidators");
const ExpressError = require("../utilities/expressError");


module.exports.createOne = async (req, res) => {
  const isValidData = validators.isValidUserObject(req.body);
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = await User({
    email: req.body.email,
    password: hashedPassword,
  });
  const result = await user.save();
  if (!result) throw new ExpressError(500, "Internal Server Error");
  const token = jwt.sign(
    { _id: result._id, email: result.email },
    process.env.SECRETKEY
  );
  res.send({token});
};
