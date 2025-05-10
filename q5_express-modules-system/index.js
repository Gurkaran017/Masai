// index.js
const express = require('express');
const os = require('os');
const dns = require('dns');
const { readFileContent } = require('./read');

const app = express();
const PORT = 3000;

// Route: /test
app.get('/test', (req, res) => {
  res.send('Test route is working!');
});

// Route: /readfile
app.get('/readfile', (req, res) => {
  const data = readFileContent();
  res.send(data);
});

// Route: /systemdetails
app.get('/systemdetails', (req, res) => {
  const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2) + ' GB';
  const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2) + ' GB';
  const cpus = os.cpus();
  const cpuModel = cpus[0]?.model;
  const coreCount = cpus.length;

  res.json({
    platform: os.platform(),
    totalMemory,
    freeMemory,
    cpuModel,
    coreCount
  });
});

// Route: /getip
app.get('/getip', (req, res) => {
  dns.lookup('masaischool.com', { all: true }, (err, addresses) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const ipv4 = addresses.find(addr => addr.family === 4)?.address;
    const ipv6 = addresses.find(addr => addr.family === 6)?.address;

    res.json({
      hostname: 'masaischool.com',
      ipv4: ipv4 || 'Not found',
      ipv6: ipv6 || 'Not found'
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
