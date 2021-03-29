
const request = require('request-promise');
var authStrategy= function(){
    this.request=(service,req,res)=>{
        let action = req.method=="GET"?req.query.action:req.body.action;
        let uri = `http://${service.url}:${service.port}/${action}`;
        console.log(uri);
        let options = {
            uri:uri,
            method:'PUT',
            form:req.body
            
        }
        request(options).
        then((body)=>{
            console.log("body"+ JSON.stringify(body));
            res.status(200).json(JSON.parse(body));
        }).catch((err)=>{
            console.log(err);
            
            res.status(403).json({
                error:"error"
            });
        });

    }
}
module.exports=authStrategy;