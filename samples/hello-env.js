const http = require('node:http');

const server = http.createServer((req, res) => { 
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('OK: ' + process.env.NAME);
  res.end();
});

server.listen(3000, (err) => { 
  console.log('Listening...');
});