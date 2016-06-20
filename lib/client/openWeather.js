var http = require('http');
var config = require('../../conf.js');
var apikey = config.apikey;

var openWeather = {}

openWeather.getTodayWeather = function(res) {
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

        });
    });
}

module.exports = openWeather;