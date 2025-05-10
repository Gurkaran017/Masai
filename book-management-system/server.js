const express = require('express');
const app = express();
const adminRoutes = require('./routes/adminRoutes');
const readerRoutes = require('./routes/readerRoutes');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

app.use(express.json());
app.use(loggerMiddleware); // Log every request

// Use the routes
app.use('/', adminRoutes);
app.use('/', readerRoutes);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
