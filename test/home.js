var assert = require('assert');
var home = require('../controllers/home');
var sinon = require('sinon');
var data = require('../lib/data');



describe('Home controller', function () {
    before(function () {
        home.template = function (req, res, callback) {
            callback(data.patient);
        };
    });

    beforeEach(function () {
        home.notify.chat = sinon.spy();
        home.notify.sms = sinon.spy();
        home.notify.call = sinon.spy();
        home.notify.log = sinon.spy();
        home.notify.lockTheDoor = sinon.spy();
        home.notify.unlockTheDoor = sinon.spy();
        req = res = {};
        res.send = sinon.spy();
    });


    describe('authors', function () {
        it('should return the authors and the version', function () {
            var package = require('../package.json');

            home.authors(req, res);

            assert(res.send.calledWith({
                name: "Nava, Jas, Shayak and Oscar",
                version: package.version
            }));
        });
    });

    describe('sos', function () {
        it('should call: chat, sms, call, log', function () {

            home.sos(req, res);

            assert(home.notify.chat.calledOnce, 'chat');
            assert(home.notify.sms.calledOnce, 'sms');
            assert(home.notify.call.calledOnce, 'call');
            assert(home.notify.unlockTheDoor.calledOnce, 'call');
            assert(home.notify.log.calledOnce, 'log');
            assert(res.send.calledOnce, 'res');
        });
    });

    describe('cancel', function () {
        it('should call: chat, sms, log', function () {

            home.cancel(req, res);

            assert(home.notify.chat.calledOnce);
            assert(home.notify.sms.calledOnce);
            assert(home.notify.lockTheDoor.calledOnce);
            assert(home.notify.log.calledOnce);
            assert(res.send.calledOnce);
        });
    });

    describe('ping', function () {
        it('should call: log', function () {

            home.cancel(req, res);

            assert(home.notify.log.calledOnce);
            assert(res.send.calledOnce);
        });
    });
});