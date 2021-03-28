

var authStrategy= function(){
    this.request=(service,req,res)=>{
        body= req.body;
        let uri = `http://${service.url}:${service.port}/${body.action}`;
        console.log(uri);
        res.redirect(307 , uri);

    }
}
module.exports=authStrategy;