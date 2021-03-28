config = require('../config.json');
const jwt = require ('jsonwebtoken');
const crypto = require('crypto');


var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return value;
};
var saltGenerator = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};


authService={
    login:(req,res,repo)=>{
        let username= req.body.username;
        let password= req.body.password;

        const user= repo.getUser(username); 
        if (user!=undefined){
            let salt = user.salt;
            let hash = sha512(password,salt);
            if( hash == user.hash){
            

                res.status(200).json({
                    toke: jwt.sign(
                        {
                        username:username,
                        role: user.role,
                        
                    },
                    config.config_token.tokenSecret,
                    {
                        expiresIn:config.config_token.expirationTime
                    },
                    ),
                    
                });
    
            }else{
                res.status(404).send('username or password incorrect');
            }
        }else{
            res.status(404).send('username or password incorrect');
        }
      


    },
    signup:(req,res,repo)=>{
        let username= req.body.username;
        let password= req.body.password;
        let role = req.body.role;
        if(username!=undefined
        && password !=undefined
        && role != undefined
        ){
            let salt =saltGenerator(256);
            let hash = sha512(password,salt);

            repo.addUser({
                username: username,
                hash:hash,
                salt: salt,
                role: role,

            })

            res.status(200).json({
                toke: jwt.sign(
                    {
                    username: username,
                    role: role,
                },
                config.config_token.tokenSecret,
                {
                    expiresIn:config.config_token.expirationTime
                },
                ),
                
            });

        }else{
            res.status(404).send('missing fields');
        }
    },


    authenticate:(req,res,next)=>{
        if(next == undefined){
            res.status(404).json({error:"invalid"});

        }else{
            if (!req.headers.authorization){
                return res.status(403).json({error: 'No credentials found'});
            }else{
                let token = req.headers.authorization;
               
                jwt.verify(token, config.config_token.tokenSecret,(err =>{
                    if(err){
                    return res.status(403).json({error: 'invalid token'});
    
                    }
                    next()
    
                }));    
                
            }
        }
        


}
}
module.exports= authService;