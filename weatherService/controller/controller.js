const weather= require('../services/weather');



 controller={
    getWeather: (req,res)=>{
        weather.getWeather(req,res);

    },
    
}

module.exports= controller;