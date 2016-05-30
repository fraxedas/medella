(function (schedule) {
    var CronJob = require('cron').CronJob;
    var data = require("../data");
    var request = require('request');

    var job = new CronJob({
        cronTime: '1 1 1 * * *', //Todo: Fix the pattern to run every hour
        onTick: function () {
            console.log("calling zeus");
            var log = {logs: [{"name": "health", "value": "OK" }]};
            var logOptions = {
                url: data.zeusUrl,
                json: log
            };

            request.post(logOptions, function (error, response, body) {
                console.log("called zeus");
                console.log(error);
                console.log(body);
            });
        },
        start: true,
        timeZone: null
    });

    schedule.init = function () {
        job.start();
    };


})(module.exports);