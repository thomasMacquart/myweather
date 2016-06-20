var client = require('../client/openWeather.js');

var todayService = {};

todayService.getToday = function(res) {
    return client.getTodayWeather(res);
}

module.exports = todayService;