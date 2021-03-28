const request = require('request-promise');
const config = require('../config.json');



auth={
    authenticate:(req,res,next)=>{
        if (!req.headers.authorization){
            return res.status(403).json({error: 'No credentials found'});
           
        }else{
            
            const url= config.discoveryService.url;
            const port = config.discoveryService.port;
            const discoveryServiceUri= `http://${url}:${port}/get?name=auth`;
           
            request(discoveryServiceUri).then((body)=>{
                let service= JSON.parse(body);
                let authURL= `http://${service.url}:${service.port}/authenticate`;
                
                var options = {
                    uri: authURL,
                    resolveWithFullResponse: true,
                    headers:{
                        authorization :req.headers.authorization,
                    }
                };
                request(authURL,options).then((resp)=>{
                    if(resp.statusCode==200){
                        console.log("token is valid : forwarding");
                        next();
                    }else{

                        return res.status(403).send({error:"invalid token"});
                    }

                }).catch((err)=>{
                    console.error(err);
                    return res.status(403).send({error:"invalid token"});

                });
                
                
            });
            
        }

    }
}
module.exports=auth;