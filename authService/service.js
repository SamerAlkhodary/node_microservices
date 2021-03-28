'use strict';
const request = require('request-promise');
const config = require('./config.json');
class Server{
constructor(port,repository){
    this.express = require('express');
    this.router  = require('./router/router');
    this.port = port;
    this.app = this.express();
    this.repository = require('./repo/userRepo');
    this.repo=repository==undefined?
    this.repository:
    repository;
    this.router(this.app,this.repo);


}
static makeServer(port){
    return new Server(port);
}
async registerService(){
    console.log(config.descovery_info);
    let uri = "http://"+config.descovery_info.url+":"+config.descovery_info.port+"/add";
   
    let options={
        uri:uri,
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body:{
            "name":"auth",
            "url": "localhost",
            "port": this.port
        }, 
        json:true
      
    }
    request(options).then((resp)=>{
        console.log(`regestering service:${resp.status}`);
    }).catch((err)=>{
        console.log(`regestering service error:faild`);
    });

    

}

run(){
    this.registerService();
    this.app.listen(
        this.port,
        ()=>{
            console.log(`auth service running on port:${this.port}`);
        }
    );
    
}
close(){
    this.app.close;
}
getApp(){
    return this.app;
}
}

module.exports= Server;

