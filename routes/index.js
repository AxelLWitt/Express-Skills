var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-ing my frustration of using sub-optimal hardware to learn stuff', 
  message:'the list of skills I am accumulating using a horrible laptop!' });
});

module.exports = router;
