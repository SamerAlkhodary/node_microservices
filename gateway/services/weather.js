var request = require('request-promise');
const key = "&appid="
url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q='
var weath = {

    getWeather: function (req, res, next) {
        console.log(req.params.country);
        request(url + req.query.city + ',' + req.query.country + key).then(function (body) {
            console.log(body),

                response = JSON.parse(body),
                result = JSON.parse(body),

                res.send(response)
        }

        ).catch(function (error) {

            res.send(error)
        }
        );
    }

}
module.exports = weath;
