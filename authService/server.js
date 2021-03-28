const Service = require('./service');
let server = Service.makeServer(4000);
server.run();
module.exports= server;