var express = require('express');
var router = express.Router();
var today = require('../lib/service/today');


/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/today', function (req, res) {
    return today.getToday(res)
});

module.exports = router;
