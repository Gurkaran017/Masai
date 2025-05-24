const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movie.routes');
const reviewRoutes = require('./routes/review.routes');

require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
