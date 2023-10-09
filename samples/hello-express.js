const http = require('node:http');
const express = require('express');

// Kreiraj aplikaciju
const app = express();

// Dodaj middleware (layer)
app.use((req, res) => { 
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('OK');
  res.end();
});

// Napravi server da slusa na 3000
const server = http.createServer(app);
server.listen(3000, (err) => { 
  console.log('Listening...');
});

