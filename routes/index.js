var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/today', function (req, res) {
  res.send('il fait beau');
});

module.exports = router;
