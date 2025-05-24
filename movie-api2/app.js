const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());

app.use('/', authRoutes);

module.exports = app;
