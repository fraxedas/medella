(function(controllers) {
    
    controllers.init = function (app){
        
        var home = require('./home');
		app.all("/api/authors", home.authors);
		app.all("/api/init", home.init);
		app.all("/api/sos/:username", home.sos);
		app.all("/api/cancel/:username", home.cancel);
		app.all("/api/ping/:username", home.ping);
        
		var user = require('./user.js');
        app.get("/api/user/", user.list);
        app.get("/api/user/:username", user.get);
		app.post("/api/user/", user.create);
		app.put("/api/user/", user.update);
		app.delete("/api/user/:username", user.delete);

        var tropo = require('./tropo.js');
        app.post("/api/tropo/call", tropo.call);
		app.all("/api/tropo/sms", tropo.sms);
        
        var spark = require('./spark.js');
        app.get("/api/spark", spark.rooms);
		app.all("/api/spark/:roomId", spark.room);
		app.all("/api/spark/:roomId/:text", spark.chat);

		//UI route
		app.all("*", function (req, res) {
			res.redirect("/");
		});
    
    };
})(module.exports);