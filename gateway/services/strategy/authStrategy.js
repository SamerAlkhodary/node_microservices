

var authStrategy= function(){
    this.request=(service,req,res)=>{
        let action = req.method=="GET"?req.query.action:req.body.action;
        let uri = `http://${service.url}:${service.port}/${action}`;
        console.log(uri);
        res.redirect(307 , uri);

    }
}
module.exports=authStrategy;