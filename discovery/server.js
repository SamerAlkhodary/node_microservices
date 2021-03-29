const Service = require('./service');
let server = Service.makeServer(undefined,5001);
server.run();
module.exports= server;