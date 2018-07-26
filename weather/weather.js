const request = require('request');

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/b7982ff2d7186a3ca6b3bf1db8dfeea6/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io servers');
    } else if (response.statusCode === 400) {
      callback('unable to fetch weather');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      });
    }
  });
};


module.exports.getWeather = getWeather;
