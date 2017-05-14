const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  console.log('FOO!');
  const sean = { name: 'Sean', age: 50, cool: true};
  // res.json(sean);
  // res.send('Hey! It works!');
  res.json(req.query);
});

router.get('/reverse/:name', (req,res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send('it works - ', reverse);
});

module.exports = router;
