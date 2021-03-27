const fs = require('fs');
 class ServiceRepositroy{
     constructor(file){
         this.file=file;
     }
     
     save(service){
        let services = JSON.parse(fs.readFileSync(this.file,'utf8'));
        services[service.name]=service;
        let data=JSON.stringify(services,null,4);
        fs.writeFileSync(this.file,data);


    }
     get(name){
        
        let services = JSON.parse(fs.readFileSync(this.file,'utf8'));
        return services[name];

    }
     update(service){
        let services = JSON.parse(fs.readFileSync(this.file,'utf8'));

    }
     
    remove(service){
        let services = JSON.parse(fs.readFileSync(this.file,'utf8'));

    }

}
module.exports= ServiceRepositroy;
