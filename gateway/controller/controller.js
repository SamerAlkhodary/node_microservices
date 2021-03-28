
const gateway = require('../services/gateway');


 controller={
   
    auth:(req,res) =>{
        gateway.forward(req,res,true);
    },
    forward:(req,res)=>{
        gateway.forward(req,res,false);
    }
    
}

module.exports= controller;