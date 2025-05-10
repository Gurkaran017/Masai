const express = require('express');
const app = express();
const ticketRoutes = require('./routes/ticketRoutes');
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// Use routes
app.use('/', ticketRoutes);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
