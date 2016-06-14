(function (home) {
	var data = require('../lib/data');
	var notify = require('../lib/notify');
	var config = require('../lib/config');

	home.notify = notify;
	home.data = data;

	home.authors = function (req, res) {
		var package = require('../package.json');
		res.send({
			name: config.authors,
			version: package.version
		});
	};

	home.init = function (req, res) {
		data.get_or_create_user(data.patient, function (err, user) {
			if (err) {
				res.status(500).send(err);
			}
			else {
				res.status(200).send(user);
			}
		});

	};

	home.sos = function (req, res) {
		var username = req.params.username;
		data.get_user(username, function (error, user) {
			if (error) {
				res.status(404).send();
			}
			else {

				var roomId = config.roomId;
				var text = user.name + " has initiated an SoS call. Medic history: " + user.notes + ". Address: " + user.location;

				notify.chat(roomId, text);
				notify.sms(user.caregiver.phone, text);
				notify.call(user.phone);
				notify.log([{
					event: "sos",
					source: user.name
				}]);

				res.send({ result: text });
			}
		});

	};

	home.cancel = function (req, res) {
		var patient = data.patient;

		var roomId = config.roomId;
		var text = patient.name + " has cancelled the SoS call";

		notify.chat(roomId, text);
		notify.sms(patient.caregiver.phone, text);
		notify.log([{
			event: "cancel",
			source: patient.name
		}]);

		res.send({ result: text });
	};

	home.ping = function (req, res) {
		var patient = data.patient;
		notify.log([{
			event: "ping",
			source: patient.name
		}]);
		res.send("pong");
	};


})(module.exports);