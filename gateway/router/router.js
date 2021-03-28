const controller = require('../controller/controller');
const logger = require('../middleware/logger');
const auth = require('../middleware/auth');

function route(app){
    app.use(logger.log);
    app.use('/private/',auth.authenticate);

    app.get('/private/',(req,res)=>{
        controller.forward(req,res);

    });
    app.put('/auth',(req,res)=>{
        controller.auth(req,res);

    });
}

module.exports = route