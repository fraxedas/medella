(function (notify) {
    var data = require('../data');
    var Sparky = require('node-sparky');
    var sparky = new Sparky({ token: data.sparkToken });
    var request = require('request');

    notify.chat = function (roomId, text, next) {
        sparky.message.send.room(roomId, { text: text }, next);
    };

    notify.sms = function (phone, text, next) {
        var sms = {
            token: data.tropoSmsToken,
            numberToDial: phone,
            msg: text
        };
        var options = {
            url: data.tropoUrl,
            headers: {
                'Content-Type': 'application/json'
            },
            json: sms
        };

        request.post(options, next);
    };

    notify.call = function (phone, next) {
        var call = {
            token: data.tropoCallToken,
            numberToDial: data.patient.phone
        };
        var options = {
            url: data.tropoUrl,
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
            url: data.zeusUrl,
            json: log
        };

        request.post(options, next);
    };

})(module.exports);