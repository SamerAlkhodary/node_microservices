config = require('../config.json');
const jwt = require ('jsonwebtoken');
authService={
    signIn:(req,res,repo)=>{
        let username= req.body.username;
        let password= req.body.password;
        const user= repo.getUser(1);  
        if(username== user.username 
        && password == user.password
        ){
            res.json({
                toke: jwt.sign(
                    {
                    username:username,
                    role:"user",
                    
                },
                config.config_token.tokenSecret,
                {
                    expiresIn:config.config_token.expirationTime
                },
                ),
                
            });

        }else{
            res.send('username or password incorrect');
        }

        

    },

}
module.exports= authService;