(function(mongo){
	var mongodb = require("mongodb");

    //local url or heroku
    var mongodbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/medella";

    var theDb = null;

    mongo.getDb = function(next) {
        if(!theDb){
            //connect to the database
            mongodb.MongoClient.connect(mongodbUrl, function(err, db){
                if(err){
                    next(err, null);
                }else{
                    theDb = {
                        db:db,
                        users: db.collection("users")                    
                    };
                    next(null, theDb);
                }
            });
        }else{
            next(null, theDb);
        }
    };

})(module.exports);