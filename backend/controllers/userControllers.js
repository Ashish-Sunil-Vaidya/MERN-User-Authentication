const User = require("../models/User");
const jwt = require("jsonwebtoken");


const createToken = (id) => {
  // JWTSKND (JWT Secret Key Not Defined)
  if (!process.env.JWT_SECRET) {
    throw new Error("Internal Server Error, Code:JWTSKND");
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const createAccount = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    const user = await User.signup(email, password, confirmPassword);

    const token = createToken(user._id);
    res.status(201).json({
      token,
      email,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(201).json({
      token,
      email,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    const user = await User.resetPassword(email, password, confirmPassword);
    const token = createToken(user._id);
    res.status(201).json({
      token,
      user,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createAccount,
  loginUser,
  resetPassword,
};
