
const url = require('url');
var weatherStrategy= function(){
    this.request= function (service,req,res){
    
            let weatherURI= `http://${service.url}:${service.port}/get`;
            console.log(weatherURI);
            res.redirect(url.format({
                pathname: weatherURI,
                query:req.query
              
            }));
        
    }
}
module.exports=weatherStrategy;