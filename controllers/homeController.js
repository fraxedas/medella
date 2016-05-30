(function (homeController) {

	homeController.init = function (app) {

		var data = require('../data');
		var Sparky = require('node-sparky');
		var sparky = new Sparky({ token: data.sparkToken });
		var request = require('request');

		app.get("/", function (req, res) {
			res.send({ name: "Nava, Jas, Shayak and Oscar" });
		});

		app.get("/sos", function (req, res) {
			var patient = data.patient;

			var roomId = data.roomId;
			var text = patient.name + " has initiated an SoS call. Medic history: " + patient.notes + ". Address: " + patient.location;

			sparky.message.send.room(roomId, { text: text }, function (err, results) {

				var sms = {
					token: data.tropoSmsToken,
					numberToDial: data.caregiver.phone,
					msg: text
				};
				var smsOptions = {
					url: data.tropoUrl,
					headers: {
						'Content-Type': 'application/json'
					},
					json: sms
				};

				request.post(smsOptions, function (error, response, body) {

					var call = {
						token: data.tropoCallToken,
						numberToDial: data.patient.phone
					};
					var callOptions = {
						url: data.tropoUrl,
						headers: {
							'Content-Type': 'application/json'
						},
						json: call
					};

					request.post(callOptions, function (error, response, body) {
						res.send({ error: error, result: body });
					});
				});


			});
		});
		
		app.get("/cancel", function (req, res) {
			var details = data.patient;

			var roomId = data.roomId;
			var text = details.name + " has cancelled the SoS call";

			sparky.message.send.room(roomId, { text: text }, function (err, results) {

				var sms = {
					token: data.tropoSmsToken,
					numberToDial: data.caregiver.phone,
					msg: text
				};
				var smsOptions = {
					url: data.tropoUrl,
					headers: {
						'Content-Type': 'application/json'
					},
					json: sms
				};

				request.post(smsOptions, function (error, response, body) {
					res.send({ error: error, result: body });
				});


			});
		});

		app.get("/ping", function (req, res) {
			var details = data.patient;

			var roomId = data.roomId;
			var text = details.name + " is reporting";

			console.log(text);
			res.send(details);
		});

	};
})(module.exports);