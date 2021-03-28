const request = require('request-promise');
const config = require('../config.json')
const strategyManager = require('./strategy/serviceStrategy')
const authStrategy = require('./strategy/authStrategy');
const weatherStrategy = require('./strategy/weatherStrategy');
gatewayService={

    forward:(req,res,isAuth)=>{
        
        const serviceName = req.method == 'GET'?req.query.service:req.body.service;
        const url= config.discoveryService.url;
        const port = config.discoveryService.port;
        const discoveryServiceUri= `http://${url}:${port}/get?name=${serviceName}`;
       
        request(discoveryServiceUri).then((body)=>{
            let service= JSON.parse(body);
            console.log("service name is "+serviceName);
            console.log("requested service is:"+JSON.stringify(service));
            
            let strategy;
            
            if(isAuth){
                strategy = new authStrategy();

            }else{
                
                switch(serviceName){
                
                    case 'weather':
                        strategy = new weatherStrategy(); 
                        break;

                    case 'auth': 
                        strategy = new authStrategy();
                        
                    break;

                    default:
                        console.log(`service = ${serviceName} not found`);
                        break;
                }

            }
            manager = new strategyManager();
            manager.setStrategy(strategy);
            manager.request(service,req,res);
            
        }).catch((err)=>{
            console.error(err);
           
            res.status(404).json({
               
                error:`findig service faild`
            }
            );
        });
       
    }
}
module.exports=gatewayService;