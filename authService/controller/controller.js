const auth= require('../services/auth');



 controller={
    signup: (req,res,repo)=>{
        auth.signup(req,res,repo);

    },
    authenticate: (req,res,repo)=>{
        auth.authenticate(req,res,repo);

    },
    login: (req,res,repo)=>{
        auth.login(req,res,repo);

    },
    
}

module.exports= controller;