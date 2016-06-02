(function (tropo) {

    var persist = require('node-persist');
    persist.initSync();
    var data = require('../data');

    //https://www.tropo.com/docs/rest/tutorials/starting-session-webapi
    tropo.call = function (req, res) {
        console.log(req.body);
        var session = req.body.session;
        res.send({
            "tropo": [
                {
                    "call": {
                        "to": [
                            session.parameters.numberToDial
                        ]
                    }
                },
                {
                    "say": [
                        {
                            "value": "Hello" + data.patient.name + ". You have initiated an SoS call. Help is on the way?"
                        }
                    ]
                }
            ]
        });
    };

    tropo.sms = function (req, res) {
        console.log(req.body);
        var session = req.body.session;
        res.send({
            "tropo": [
                {
                    "call": {
                        "to": session.parameters.numberToDial,
                        "network": "SMS"
                    }
                },
                { "say": { "value": session.parameters.msg } }
            ]
        });
    };

})(module.exports);