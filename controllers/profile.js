(function (profile) {
	
	var data = require('../lib/data');
	
	profile.data = data;

	profile.list = function (req, res) {
		data.list_users(function (error, users) {
			if (error) {
				res.status(500).send(error);
			}
			else {
				console.log(users);
				res.send(users);
			}
		});
	};

	profile.get = function (req, res) {
		var username = req.params.username;
		data.get_user(username, function (error, user) {
			if (error) {
				res.status(500).send(error);
			}
			else if (!user) {
				res.status(404).send("We couldn't find: " + username);
			}
			else {
				res.send(user);
			}
		});
	};

	profile.create = function (req, res) {
		var user = req.body;
		data.get_user(user.username, function (error, existing) {
			if (error) {
				res.status(500).send(error);
			}
			else if (existing){
				res.status(400).send(user.username + " already exists");
			}
			else {
				data.insert_user(user,function (error, user) {
					if (error || !user) {
						res.status(500).send(error);
					}
					else {
						res.send(user);
					}
				});
			}
		});
	};

	profile.update = function (req, res) {
		var user = req.body;
		data.get_user(user.username, function (error, existing) {
			if (error) {
				res.status(500).send(error);
			}
			else if (!existing){
				res.status(404).send("We couldn't find: " + user.username);
			}
			else {
				data.update_user(user,function (error, result) {
					if (error || !user) {
						res.status(500).send(error);
					}
					else {
						res.send(user);
					}
				});
			}
		});
	};

	profile.delete = function (req, res) {
		var username = req.params.username;
		data.get_user(username, function (error, existing) {
			if (error) {
				res.status(500).send(error);
			}
			else if (!existing){
				res.status(404).send("We couldn't find: " + username);
			}
			else {
				data.remove_user(username, function (error, result) {
				if (error) {
					res.status(500).send(error);
				}
				else {
					res.status(204).send();
				}
		});
			}
		});
	};


})(module.exports);