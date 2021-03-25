const homeService= require('../services/home');
const profileService= require('../services/profile');
const authService = require('../services/auth');

 controller={
    getHome: (req,res)=>{
        homeService.get(req,res);

    },
    getProfile:(req,res)=>{
        profileService.get(req,res);
        
    },
    authenticate:(req,res,repo) =>{
        authService.signIn(req,res,repo);
    }
}

module.exports= controller;