(function (data) {
    var database = require("./mongo");
    var ObjectID = require('mongodb').ObjectID;

    data.patient = {
        username: "fraxedas@gmail.com",
        name: "Oscar the grouch",
        phone: "6479716879",
        location: "123 Sesame St",
        notes: "Very grouchy and green",
        caregiver: {
            name: "Elmo",
            phone: "6479716879"
        }
    };
    
    var find = function (expression, collection, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.db.collection(collection).findOne(expression, next);
            }
        });
    };
    
    var all = function (collection, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.db.collection(collection).find().toArray(next);;
            }
        });
    };

    var insert = function (entity, collection, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.db.collection(collection).insert(entity, function (err, result) {
                    if (err) {
                        next(err);
                    } else {
                        var inserted = result.ops[0];
                        next(null, inserted);
                    }
                });
            }
        });
    };
    
    var update = function (entity, collection, expression, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.db.collection(collection).update(expression, entity, function (err, result) {
                    if (err) {
                        next(err);
                    } else {
                        next(null, entity);
                    }
                });
            }
        });
    };
    
    var remove = function (expression, collection, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.db.collection(collection).remove(expression, next);
            }
        });
    };

    data.list_users = function (next) {
        all("users", next);
    };
    
    data.get_user = function (username, next) {
        find({ username: username }, "users", next);
    };

    data.insert_user = function (user, next) {
        insert(user, "users", next);
    };

    data.update_user = function (user, next) {
        update(user, "users", { username: user.username }, next);
    };

    data.remove_user = function (username, next) {
        remove({ username: username }, "users", next);
    };
    
    data.get_or_create_user = function (user, next) {
        find({ username: user.username }, "users", function (err, existing) {
			if (err) {
				next(err);
			}
			else {
				if (existing){
                    next(null, existing);
                }
                else {
					data.insert_user(user, next);
				}
			}
		});
    };

})(module.exports);