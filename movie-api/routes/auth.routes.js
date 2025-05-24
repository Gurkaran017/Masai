const express = require("express");
const { register, login, refreshToken } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/token", refreshToken);

// Example protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ msg: `Hello user ${req.user.id}, access granted.` });
});

module.exports = router;
