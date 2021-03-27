const request = require('request-promise');
const config = require('../config.json')
gatewayService={

    forward:(req,res)=>{
        let serviceName = req.query.service;
        let url= config.discoveryService.url;
        let port = config.discoveryService.port;
        let discoveryServiceUri= `http://${url}:${port}/get?name=${serviceName}`;

        request(discoveryServiceUri).then((body)=>{
            let weatherService= JSON.parse(body);
            let city = req.query.city;
            let country = req.query.country;
            let weatherURI= `http://${weatherService.url}:${weatherService.port}/get?city=${city}&country=${country}`;
           
            request({uri:weatherURI,resolveWithFullResponse: true}).then((resp)=>{
         
                    res.status(resp.statusCode).json(JSON.parse(resp.body));


                
            }).catch(()=>{
                res.status(404).json({ error:"faild to get the service"});

            });
            


        }).catch((err)=>{
            res.status(404).json({
                error:`findig service faild`
            }
            );
        });
       
    }
}
module.exports=gatewayService;