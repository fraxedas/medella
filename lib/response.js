(function (response) {

    response.failure = function (res, error) {
        res.status(500).send(error);
    };

    response.notFound = function (res, key) {
        res.status(404).send("We couldn't find: " + key);
    };

    response.conflict = function (res, key) {
        res.status(409).send(key + " already exists");
    };

    response.result = function (res, result, status) {
        res.status(status || 200).send(result);
    };


})(module.exports);