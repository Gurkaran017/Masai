const Review = require('../models/review.model');

exports.createReview = async (req, res) => {
  try {
    const { movieId } = req.params;
    const { rating, comment } = req.body;
    const userId = req.userId;

    const review = new Review({ movieId, userId, rating, comment });
    await review.save();
    res.status(201).json({ message: 'Review added successfully', review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
