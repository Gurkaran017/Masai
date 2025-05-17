const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.use('/', userRoutes);
app.use('/', profileRoutes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
  app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(err => console.error(err));
