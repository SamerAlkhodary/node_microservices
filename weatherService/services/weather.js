var request = require('request-promise');
var process = require('process');
const key = "&appid="+process.env.WEATHERKEY
url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q='
var weath = {

    getWeather:  (req, res)=> {

        request(url + req.query.city + ',' + req.query.country + key).then(function (body) {
            
                response = JSON.parse(body),
                

                res.send(response)
        }

        ).catch( (error)=> {

            res.send(error)
        }
        );
    }

}
module.exports = weath;