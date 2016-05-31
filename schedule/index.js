(function (schedule) {
    var CronJob = require('cron').CronJob;
    var notify = require("../lib/notify");

    var job = new CronJob({
        cronTime: '0 0 * * * *',
        onTick: function () {
            console.log("Add your cleanup here");
        },
        start: true,
        timeZone: null
    });

    schedule.init = function () {
        job.start();
    };


})(module.exports);