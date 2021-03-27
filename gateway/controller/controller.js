
const authService = require('../services/auth');
const gateway = require('../services/gateway');


 controller={
   
    authenticate:(req,res,repo) =>{
        authService.signIn(req,res,repo);
    },
    forward:(req,res)=>{
        gateway.forward(req,res);
    }
    
}

module.exports= controller;