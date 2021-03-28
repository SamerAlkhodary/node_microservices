var strategyManager = function(){
    this.strategy = undefined;
};
strategyManager.prototype={
    setStrategy: function(strategy){
        this.strategy = strategy;
    },

    request: function(service,req,res){
        return this.strategy.request(service,req,res);
    }
};
module.exports=strategyManager;