(function (notify) {
    var config = require('./config');
    var Sparky = require('node-sparky');
    var sparky = new Sparky({ token: config.sparkToken });
    var request = require('request');

    notify.chat = function (roomId, text, next) {
        sparky.message.send.room(roomId, { text: text }, next);
    };

    notify.sms = function (phone, text, next) {
        var sms = {
            token: config.tropoSmsToken,
            numberToDial: phone,
            msg: text
        };
        var options = {
            url: config.tropoUrl,
            headers: {
                'Content-Type': 'application/json'
            },
            json: sms
        };

        request.post(options, next);
    };

    notify.call = function (phone, next) {
        var call = {
            token: config.tropoCallToken,
            numberToDial: phone
        };
        var options = {
            url: config.tropoUrl,
            headers: {
                'Content-Type': 'application/json'
            },
            json: call
        };

        request.post(options, next);
    };

    notify.log = function (logs, next) {
        var log = { logs: logs };
        var options = {
            url: config.zeusUrl,
            json: log
        };

        request.post(options, next);
    };

})(module.exports);