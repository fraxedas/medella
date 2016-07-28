(function(controllers) {
    
    controllers.init = function (app){
        
        var home = require('./home');
		app.all("/authors", home.authors);
		app.all("/init", home.init);
		app.all("/sos/:username", home.sos);
		app.all("/cancel/:username", home.cancel);
		app.all("/ping/:username", home.ping);
        
		var user = require('./user.js');
        app.get("/user/", user.list);
        app.get("/user/:username", user.get);
		app.post("/user/", user.create);
		app.put("/user/", user.update);
		app.delete("/user/:username", user.delete);

        var tropo = require('./tropo.js');
        app.post("/tropo/call", tropo.call);
		app.all("/tropo/sms", tropo.sms);
        
        var spark = require('./spark.js');
        app.get("/spark", spark.rooms);
		app.all("/spark/:roomId", spark.room);
		app.all("/spark/:roomId/:text", spark.chat);
    
    };
})(module.exports);