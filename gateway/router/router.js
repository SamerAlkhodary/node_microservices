const controller = require('../controller/controller');
const logger = require('../middleware/logger');
const auth = require('../middleware/auth');

function route(app,repo){
    app.use(logger.log);
    app.use('/private/',auth.authenticate);


    app.get('/private/home',(req,res)=>{
        controller.getHome(req,res) 

    });
    app.get('/private/profile',(req,res)=>{
        controller.getProfile(req,res);

    });
    app.get('/private/weather',(req,res)=>{
        controller.getWeather(req,res);

    });
    app.post('/login',(req,res)=>{
        controller.authenticate(req,res,repo);

    });
}

module.exports = route