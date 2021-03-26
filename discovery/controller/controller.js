const discovery= require('../services/discovery');



 controller={
    getService: (req,res,repo)=>{
        discovery.getService(req,res,repo);

    },
    registerService:(req,res,repo)=>{
        discovery.registerService(req,res,repo);

    }
}

module.exports= controller;