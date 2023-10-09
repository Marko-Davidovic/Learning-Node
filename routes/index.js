const express = require('express');
const router = express.Router();

// Dodaj render
router.get('/', (req, res) => { 
  res.render('index');
});

module.exports = router;