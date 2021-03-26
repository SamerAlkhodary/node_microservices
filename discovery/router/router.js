const controller = require('../controller/controller');
const logger = require('../middleware/logger');
var bp = require('body-parser')
function route(app,repo){

    app.use(bp.json())
    app.use(bp.urlencoded({ extended: true }))
    app.use(logger.log);

    app.get('/get',(req,res)=>{
        controller.getService(req,res,repo) ;

    });
    app.post('/add',(req,res)=>{
        controller.registerService(req,res,repo);

    });
   
}

module.exports = route