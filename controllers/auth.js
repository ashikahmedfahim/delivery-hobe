const Admin = require("../models/admins");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validators = require("../utilities/dataValidators");
const ExpressError = require("../utilities/expressError");

module.exports.adminLogin = async (req, res) => {
  const isValidData = validators.isValidUserObject(req.body);
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const isAdmin = await Admin.findOne({ email: req.body.email });
  if (isAdmin) {
    const isValidAdmin = await bcrypt.compare(
      req.body.password,
      isAdmin.password
    );
    if (isValidAdmin) {
      const token = jwt.sign(
        { _id: isAdmin._id, email: isAdmin.email },
        process.env.SECRETKEY
      );
      res.status(200).header("x-auth-token", token).send({ token });
    } else {
      res.status(400).send({ message: "Invalid credentials" });
    }
  } else {
    res.status(404).send({ message: "Invalid credentials" });
  }
};
module.exports.userLogin = async (req, res) => {
  const isValidData = validators.isValidUserObject(req.body);
  if (isValidData.error) throw new ExpressError(400, isValidData.error.message);
  const isUser = await User.findOne({ email: req.body.email });
  if (isUser) {
    const isValidUser = await bcrypt.compare(
      req.body.password,
      isUser.password
    );
    if (isValidUser) {
      const token = jwt.sign(
        {
          _id: isUser._id,
          email: isUser.email,
        },
        process.env.SECRETKEY
      );
      res.status(200).send({ token });
    } else {
      res.status(400).send({ message: "Invalid credentials" });
    }
  } else {
    res.status(404).send({ message: "Invalid credentials" });
  }
};
