const homeService= require('../services/home');
const profileService= require('../services/profile');
const authService = require('../services/auth');
const weather = require('../services/weather');


 controller={
    getHome: (req,res)=>{
        homeService.get(req,res);

    },
    getProfile:(req,res)=>{
        profileService.get(req,res);
        
    },
    authenticate:(req,res,repo) =>{
        authService.signIn(req,res,repo);
    },
    getWeather:(req,res)=>{
        weather.getWeather(req,res);

    }
}

module.exports= controller;