const Service = require('./service');
let server = Service.makeServer(5002);
server.run();
module.exports= server;