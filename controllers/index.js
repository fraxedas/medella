(function(controllers) {
    
    controllers.init = function (app){
        
        var home = require('./home');
		app.get("/", home.authors);
		app.get("/init", home.init);
		app.get("/sos/:username", home.sos);
		app.get("/cancel/:username", home.cancel);
		app.get("/ping/:username", home.ping);
        
        var tropo = require('./tropo.js');
        app.post("/tropo/call", tropo.call);
		app.all("/tropo/sms", tropo.sms);
        
        var spark = require('./spark.js');
        app.get("/spark", spark.rooms);
		app.all("/spark/:roomId", spark.room);
		app.all("/spark/:roomId/:text", spark.chat);
    
    };
})(module.exports);