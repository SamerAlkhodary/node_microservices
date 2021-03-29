
const url = require('url');
const request = require('request-promise');
var weatherStrategy=  function(){
    this.request= async(service,req,res)=>{
    
            let weatherURI= `http://${service.url}:${service.port}/get`;
            console.log("ur:"+weatherURI);
            try{
                const body= await  request(url.format({
                    pathname: weatherURI,
                    query:req.query
                  
                }));
                res.json(JSON.parse(body));
    
            }catch(err){
                console.error(err);  
             
                res.status(404).json({error:"error"});


            }
            
        
    }
}
module.exports=weatherStrategy;