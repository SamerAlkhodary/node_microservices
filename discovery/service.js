'use strict';
class Server{
constructor(repository,port){
    this.express = require('express');
    this.router  = require('./router/router');
    this.port = port;
    this.app = this.express();
    this.repository = require('./repository/serviceRepoditory');
    this.repo=repository==undefined?new this.repository("services.json"):repository;
    this.router(this.app,this.repo);


}
static makeServer(repository,port){
    return new Server(repository,port);
}

run(){
    this.app.listen(
        this.port,
        ()=>{
            console.log(`Discovery service running on port:${this.port}`);
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

