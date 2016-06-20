var express = require('express');
var router = express.Router();
var config = require('../conf.js');
var http = require('http');

var apikey = config.apikey;

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/today', function (req, res) {

  var path = 'http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=' + apikey;

  return http.get({
    host: 'api.openweathermap.org',
    path: '/data/2.5/weather?q=Amsterdam&APPID=' + apikey
  }, function(response) {
    // Continuously update stream with data
    console.log('test');
    var body = '';
    response.on('data', function(d) {
      body += d;
    });
    response.on('end', function() {
      res.send(body);
      // Data reception is done, do whatever with it!
      /*var parsed = JSON.parse(body);
      callback({
        email: parsed.email,
        password: parsed.pass
      });*/
    });
  });
});

module.exports = router;
