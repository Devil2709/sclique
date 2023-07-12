const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    const username = user.username;
    const avatarColor = user.avatarColor;
    res.status(200).json({ email, username, token, avatarColor });
    console.log("done");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password, firstName, lastName, username, avatarColor } =
    req.body;
  try {
    const user = await User.signup(
      email,
      password,
      firstName,
      lastName,
      username,
      avatarColor
    );
    const token = createToken(user._id);
    res.status(200).json({ email, username, token, avatarColor });
    console.log("done");
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = { signupUser, loginUser };
