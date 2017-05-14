// ROUTES FILE! -> tells us the urls that we can hit, then delegate work to controllers...
  // -> for each route -> factor out callback logic into a dedicated CONTROLLER

const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// RESPONSE METHODS:
  // 1. send simple string/data
// res.send('string goes here');
  
  // 2. send back json data
// res.json({item: 'this is an obj that will be json stringified'});
  
  // 3. send back/render a template (using pug/jade templating language)
// res.render()

// call controller function, which is imported
router.get('/', storeController.homePage);

router.get('/reverse/:name', (req,res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send('it works - ', reverse);
});

module.exports = router;
