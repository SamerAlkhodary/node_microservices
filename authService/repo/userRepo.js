
const fs = require('fs');
const repo={
    getUser: (username)=>{
        let db = JSON.parse(fs.readFileSync('db.json','utf8'));
        return user= db[username]
},
    addUser: (user)=>{
        let db = JSON.parse(fs.readFileSync('db.json','utf8'));
        db[user.username]= user;
        let data=JSON.stringify(db,null,4);
        fs.writeFileSync('db.json',data);
    }
}
module.exports=repo;