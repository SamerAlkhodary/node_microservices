const controller = require('../controller/controller');
const logger = require('../middleware/logger');

function route(app){
    app.use(logger.log);

    app.get('/get',(req,res)=>{
        controller.getWeather(req,res) ;

    });
  
   
}

module.exports = route