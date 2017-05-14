// ROUTES!

const express = require('express');
const router = express.Router();

// RESPONSE METHODS:
  // 1. send simple string/data
// res.send('string goes here');
  
  // 2. send back json data
// res.json({item: 'this is an obj that will be json stringified'});
  
  // 3. send back/render a template (using pug/jade templating language)
// res.render()

// Do work here
router.get('/', (req, res) => {
  console.log('root route...');
  const sean = { name: 'Sean', age: 50, cool: true};
  // res.json(sean);
  // res.send('Hey! It works!');
  // res.json(req.query);
  
  // need a template to render out
  res.render('hello', {
    name: 'sean',
    dog: req.query.dog
  });
});

router.get('/reverse/:name', (req,res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send('it works - ', reverse);
});

module.exports = router;
