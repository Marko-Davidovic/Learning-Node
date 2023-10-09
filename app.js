const http = require('node:http');
const express = require('express');
const bodyParser = require('body-parser');

// Kreiraj aplikaciju
const app = express();
app.set('view engine', 'pug');

// Serve static
app.use('/', express.static(__dirname + '/public'));

// Zakaci neku variablu na req
app.use((req, res, next) => { 
  req.user = 'Marko';
  next();
})

// Dodaj da pokupi body ako ga ima
app.use(bodyParser.json());

const apiRouter = require('./routes/api');
app.use(apiRouter);

const indexRouter = require('./routes/index');
app.use(indexRouter);

// 404 Handler
app.use((req, res) => { 
  res.send('Not Found');
});

// Error Handler
app.use((err, req, res, next) => { 
  res.status(500).render('error', { err: err.message });
});

// Napravi server da slusa na 3000
const server = http.createServer(app);
server.listen(3000, (err) => { 
  console.log('Listening...');
});

