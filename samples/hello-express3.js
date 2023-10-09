const http = require('node:http');
const express = require('express');

// Kreiraj aplikaciju
const app = express();

// Dodaj middleware (layer)
app.use('/api', (req, res) => { 
  res.send({ name: 'Marko Davidovic', age: 35 });
});

app.use((req, res) => { 
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('OK Svaki drugi');
  res.end();
});

// Napravi server da slusa na 3000
const server = http.createServer(app);
server.listen(3000, (err) => { 
  console.log('Listening...');
});

