
profileService={
    get: (req,res)=>{

        res.json({name: req.query.name, age: req.query.age});
    }

}
module.exports = profileService
