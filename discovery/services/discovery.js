'use strict';

const discovery = {

    getService: (req, res, repo) => {

        let name = req.query.name;
        
        let service = repo.get(name);

        if (service != undefined) {
            res.status(200).json({
                name: service.name,
                url: service.url,
                port: service.port,
            });
        }
        else {
            res.status(404).send({
                error: "service not found"

            });
        }

    },
    registerService: (req, res, repo) => {

        let name = req.body.name;
        let url = req.body.url;
        let port = req.body.port;
        

        if (name != undefined && url != undefined && port != undefined) {

            let service = {
                name: name,
                url: url,
                port, port
            };
            repo.save(service);

            res.status(200).json({ status: "worked" });
        }
        else {
            res.status(406).send({ status: "error" });
          
        }



    },
}
module.exports = discovery