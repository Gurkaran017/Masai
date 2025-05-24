const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

exports.getAllMoviesWithReviews = async (req, res) => {
  try {
    const movies = await Movie.aggregate([
      {
        $lookup: {
          from: 'reviews',
          localField: '_id',
          foreignField: 'movieId',
          as: 'reviews'
        }
      }
    ]);
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMovieByIdWithReviews = async (req, res) => {
  try {
    const movieId = new mongoose.Types.ObjectId(req.params.id);
    const movie = await Movie.aggregate([
      { $match: { _id: movieId } },
      {
        $lookup: {
          from: 'reviews',
          localField: '_id',
          foreignField: 'movieId',
          as: 'reviews'
        }
      }
    ]);
    res.json(movie[0] || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
