const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const User = require('../models/User');

// POST /add-profile
router.post('/add-profile', async (req, res) => {
  try {
    const { bio, socialMediaLinks, user } = req.body;

    const existingUser = await User.findById(user);
    if (!existingUser) return res.status(404).json({ error: 'User not found.' });

    const existingProfile = await Profile.findOne({ user });
    if (existingProfile) return res.status(400).json({ error: 'This user already has a profile.' });

    const profile = new Profile({ bio, socialMediaLinks, user });
    await profile.save();
    res.status(201).json({ message: 'Profile created', profile });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /profiles → list all profiles with user info
router.get('/profiles', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', 'name email');
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
