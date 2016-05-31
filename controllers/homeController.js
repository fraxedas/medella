(function (homeController) {

	homeController.init = function (app) {

		var data = require('../data');
		var notify = require('../lib/notify');

		app.get("/", function (req, res) {
			var package = require('../package.json');
			res.send({
				name: "Nava, Jas, Shayak and Oscar",
				version: package.version
			});
		});

		app.get("/sos", function (req, res) {
			var patient = data.patient;

			var roomId = data.roomId;
			var text = patient.name + " has initiated an SoS call. Medic history: " + patient.notes + ". Address: " + patient.location;
				
			notify.chat(roomId, text);
			notify.sms(data.caregiver.phone, text);
			notify.call(data.patient.phone);
			notify.log([{
				event: "sos",
				source: data.patient.name
			}]);
			
			res.send({ result: text });
		});

		app.get("/cancel", function (req, res) {
			var details = data.patient;

			var roomId = data.roomId;
			var text = details.name + " has cancelled the SoS call";

			notify.chat(roomId, text);
			notify.sms(data.caregiver.phone, text);
			notify.log([{
				event: "cancel",
				source: data.patient.name
			}]);
			
			res.send({ result: text });
		});

		app.get("/ping", function (req, res) {
			notify.log([{
				event: "ping",
				source: data.patient.name
			}]);
			res.send("pong");
		});

	};
})(module.exports);