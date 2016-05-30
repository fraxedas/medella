(function (sparkController) {
	sparkController.init = function (app) {

		var data = require('../data');
		var Sparky = require('node-sparky');
		var sparky = new Sparky({ token: data.sparkToken });
		
		app.get("/spark", function (req, res) {
			sparky.rooms.get(function (err, results) {
				res.send(results);
			});
		});

		app.all("/spark/:roomId", function (req, res) {
			var roomId = req.params.roomId;
			sparky.messages.get(roomId, 10, function (err, results) {
				res.send({ error: err, result: results });
			});
		});

		app.all("/spark/:roomId/:text", function (req, res) {
			var roomId = req.params.roomId;
			var text = req.params.text;
			sparky.message.send.room(roomId, {
				text: text
			}, function (err, results) {
				res.send({ error: err, result: results });
			});
		});
	};
})(module.exports);