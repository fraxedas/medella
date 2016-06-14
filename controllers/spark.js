(function (spark) {

	var config = require('../lib/config');
	var Sparky = require('node-sparky');
	var sparky = new Sparky({ token: config.sparkToken });

	spark.rooms = function (req, res) {
		sparky.rooms.get(function (err, results) {
			res.send(results);
		});
	};

	spark.room = function (req, res) {
		var roomId = req.params.roomId;
		sparky.messages.get(roomId, 10, function (err, results) {
			res.send({ error: err, result: results });
		});
	};

	spark.chat = function (req, res) {
		var roomId = req.params.roomId;
		var text = req.params.text;
		sparky.message.send.room(roomId, {
			text: text
		}, function (err, results) {
			res.send({ error: err, result: results });
		});
	};

})(module.exports);