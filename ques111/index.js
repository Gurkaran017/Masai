const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');


app.use('/api', apiRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
