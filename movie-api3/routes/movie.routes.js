const express = require('express');
const { getAllMoviesWithReviews, getMovieByIdWithReviews } = require('../controllers/movie.controller');
const router = express.Router();

router.get('/', getAllMoviesWithReviews);
router.get('/:id', getMovieByIdWithReviews);

module.exports = router;
