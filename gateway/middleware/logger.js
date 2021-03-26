logger={
    log: (req,res,next)=>{
            let time = new Date();
            let formatted_date= 
            time.getMonth()+1+"-"+time.getDate()+" " + time.getHours()+ ":"+ time.getMinutes()+":"+time.getSeconds()
            console.log(formatted_date+ ": "+req.url);
            next();
        },
    }
    
module.exports=logger;