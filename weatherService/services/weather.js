var request = require('request-promise');
var process = require('process');
const key = "&appid="+process.env.WEATHERKEY
url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q='
var weath = {

    getWeather:  (req, res)=> {
        let city = req.query.city;
        let country= req.query.country;
        if(city == undefined || country == undefined){
            res.status(404).json({error:"mssing args"});

        }else{
            request({uri:url + city + ',' +country + key,resolveWithFullResponse: true}).then((resp)=> {
                if(resp.statusCode==200){
                    response = JSON.parse(resp.body),
                    res.status(200).
                    json(response)

                }else{
                    res.status(resp.statusCode).
                    json({error:`could not fetch weather for city=${req.query.city} and country=${req.query.country}` });

                }
                
        }

        ).catch( (error)=> {
            res.status(404).
            json({error:`could not fetch weather for city=${req.query.city} and country=${req.query.country}` });
        }
        );
            
        }
        
    }

}
module.exports = weath;