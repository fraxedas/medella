
(function (middleware) {

    middleware.init = function (app) {

        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

            next();
        });

    };

})(module.exports);