// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Route: GET /home → HTML response
app.get('/home', (req, res) => {
  res.status(200).send('<h1>Welcome to Home Page</h1>');
});

// Route: GET /aboutus → JSON response
app.get('/aboutus', (req, res) => {
  res.status(200).json({ message: 'Welcome to About Us' });
});

// Route: GET /contactus → Dummy contact details
app.get('/contactus', (req, res) => {
  res.status(200).json({
    name: "Masai School",
    email: "contact@masaischool.com",
    phone: "+91-1234567890",
  });
});

// Route: Handle undefined routes
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
