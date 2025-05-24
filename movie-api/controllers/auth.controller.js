const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const generateTokens = (user) => {
  const payload = { id: user._id };
  const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: "5m" });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: "7d" });
  return { accessToken, refreshToken };
};

exports.register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ msg: "User registered" });
  } catch (err) {
    res.status(400).json({ msg: "Registration failed", error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }
    const tokens = generateTokens(user);
    res.json(tokens);
  } catch (err) {
    res.status(500).json({ msg: "Login failed", error: err.message });
  }
};

exports.refreshToken = (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).json({ msg: "Refresh token required" });

  jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
    if (err) return res.status(403).json({ msg: "Invalid refresh token" });
    const newAccessToken = jwt.sign({ id: user.id }, process.env.ACCESS_SECRET, { expiresIn: "5m" });
    res.json({ accessToken: newAccessToken });
  });
};
