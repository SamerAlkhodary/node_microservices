const Service = require('./service');
let server = Service.makeServer(undefined,5000);
server.run();
module.exports= server;