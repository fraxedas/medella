(function (user) {

	var data = require('../lib/data');
	var response = require('../lib/response');

	user.data = data;

	user.list = function (req, res) {
		data.list_users(function (error, users) {
			if (error) {
				response.failure(res, error);
			}
			else {
				console.log(users);
				res.send(users);
			}
		});
	};

	user.get = function (req, res) {
		var username = req.params.username;
		data.get_user(username, function (error, user) {
			if (error) {
				response.failure(res, error);
			}
			else if (!user) {
				response.notFound(res, username);
			}
			else {
				response.result(res, user);
			}
		});
	};

	user.create = function (req, res) {
		var user = req.body;
		data.get_user(user.username, function (error, existing) {
			if (error) {
				response.failure(res, error);
			}
			else if (existing) {
				response.conflict(res, user.username);
			}
			else {
				data.insert_user(user, function (error, user) {
					if (error || !user) {
						response.failure(res, error);
					}
					else {
						response.result(res, user, 201);
					}
				});
			}
		});
	};

	user.update = function (req, res) {
		var user = req.body;
		data.get_user(user.username, function (error, existing) {
			if (error) {
				response.failure(res, error);
			}
			else if (!existing) {
				response.notFound(res, user.username);
			}
			else {
				data.update_user(user, function (error, result) {
					if (error || !user) {
						response.failure(res, error);
					}
					else {
						response.result(res, user);
					}
				});
			}
		});
	};

	user.delete = function (req, res) {
		var username = req.params.username;
		data.get_user(username, function (error, existing) {
			if (error) {
				response.failure(res, error);
			}
			else if (!existing) {
				response.notFound(res, username);
			}
			else {
				data.remove_user(username, function (error, result) {
					if (error) {
						response.failure(res, error);
					}
					else {
						response.result(res, null, 204);
					}
				});
			}
		});
	};


})(module.exports);