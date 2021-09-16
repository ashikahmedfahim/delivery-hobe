const Admin = require("../models/admins");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validators = require("../utilities/dataValidators");
const ExpressError = require("../utilities/expressError");


module.exports.createOne = async (req, res) => {
  const isValidData = validators.isValidUserObject(req.body);
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const admin = await Admin({
    email: req.body.email,
    password: hashedPassword,
  });
  const result = await admin.save();
  if (!result) throw new ExpressError(500, "Internal Server Error");
  const token = jwt.sign(
    { _id: result._id, email: result.email },
    process.env.SECRETKEY
  );
  res.send({token});
};

