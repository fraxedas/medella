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
    
    var tracking = function(){
        var now = new Date();
        return {
            created: now,
            accessed: now
        };
    };
    
    var update_tracking = function(tracking){
        var now = new Date();
        tracking.updated = now;
    };
    
    var object_id = function(id){
        return  ObjectID.createFromHexString(id);
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

    var load = function (id, collection, next) {
       find({ _id: object_id(id) }, collection, next);
    };
    
    var all = function (collection, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.db.collection(collection).find({}, next);
            }
        });
    };

    var insert = function (entity, collection, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                entity.tracking  = tracking();
                db.db.collection(collection).insert(entity, function (err, result) {
                    if (err) {
                        next(err);
                    } else {
                        var inserted = result.ops[0];
                        inserted.id = inserted._id.toHexString();
                        next(null, inserted);
                    }
                });
            }
        });
    };
    
    var update = function (entity, collection, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                entity.tracking = update_tracking(entity.tracking);
                db.db.collection(collection).update({ _id: object_id(entity.id) }, entity, next);
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

    data.insert_user = function (user, next) {
        insert(user, "users", next);
    };

    data.get_user = function (username, next) {
        find({ username: username }, "users", next);
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
					data.insert_user(user, function (err, persisted) {
						if (err) {
							next(err);
						}
						else {
							next(null, persisted);
						}
					});
				}
			}
		});
    };
    
    

})(module.exports);