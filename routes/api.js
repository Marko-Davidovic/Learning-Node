const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => { 
  res.send({ name: 'Marko Davidovic', age: 35, query: req.query.search });
});

router.get('/check', (req, res) => { 
  res.send(req.user);
});

const baza = [
  { id: 1, name: 'Marko' },
  { id: 2, name: 'Pero' }
];

// Get All
router.get('/api/persons', (req, res) => { 
  res.send(baza);
});

router.get('/api/person/:id', (req, res) => { 
  const id = parseInt(req.params.id) || null;
  const selected = baza.find((i) => i.id === id);
  if (selected) {
    res.send(selected);
    return;
  }

  res.status(404).send('Not Found');
});

router.post('/api/persons', (req, res) => { 
  if (!req.body || !req.body.id) {
    res.status(400).send('Bad Request');
  }
  else {
    baza.push(req.body);
    res.status(201).send('Created');
  }
});

router.get('/api/person-x/:id', (req, res, next) => { 
  next(new Error('Cannot do that!'));
});

router.delete('/api/person/:id', (req, res, next) => { 
  next(new Error('Cannot do that!'));
});

module.exports = router;
