var express = require('express');
var router = express.Router();
var config = require('../conf.js');

var apikey = config.apikey;

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/today', function (req, res) {
  res.send('il fait beau ' + apikey);
});

module.exports = router;
