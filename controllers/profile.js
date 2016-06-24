(function (profile) {
	var data = require('../lib/data');
	
	profile.data = data;

	profile.get = function (req, res) {
		var username = req.params.username;
		data.get_user(username, function (error, user) {
			if (error) {
				res.status(404).send("We couldn't find: " + username);
			}
			else {
				res.send(user);
			}
		});
	};

	profile.create = function (req, res) {
		
	};

	profile.update = function (req, res) {
		
	};

	profile.delete = function (req, res) {
		
	};


})(module.exports);