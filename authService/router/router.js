const controller = require('../controller/controller');
const logger = require('../middleware/logger');
var bp = require('body-parser')
function route(app,repo){
    app.use(logger.log);
    app.use(bp.json())
    app.use(bp.urlencoded({ extended: true }))

    app.put('/login',(req,res)=>{
        controller.login(req,res,repo) ;

    });
  
    app.get('/authenticate',(req,res)=>{
        controller.authenticate(req,res) ;

    });
    app.put('/signup',(req,res)=>{
        controller.signup(req,res,repo) ;

    });
  
   
}

module.exports = route