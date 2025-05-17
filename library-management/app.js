const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');

app.use(express.json());
connectDB();

app.use('/books', bookRoutes);
app.use('/members', memberRoutes);

app.use('*', (req, res) => res.status(404).json({ message: 'Route not found' }));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
