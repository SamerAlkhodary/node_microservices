const controller = require('../controller/controller');
const logger = require('../middleware/logger');
const auth = require('../middleware/auth');

function route(app,repo){
    app.use(logger.log);
    app.use('/private/',auth.authenticate);



    app.get('/private/get',(req,res)=>{
        controller.forward(req,res);

    });
    app.post('/login',(req,res)=>{
        controller.authenticate(req,res,repo);

    });
}

module.exports = route