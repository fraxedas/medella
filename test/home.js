var assert = require('assert');
var home = require('../controllers/home');
var sinon = require('sinon');

describe('Home controller', function () {
    describe('authors', function () {
        it('should return the authors and the version', function () {
            var package = require('../package.json');
            req = res = {};
            res.send = sinon.spy();

            home.authors(req, res);

            assert(res.send.calledWith({
                name: "Nava, Jas, Shayak and Oscar",
                version: package.version
            }));
        });
    });

    describe('sos', function () {
        it('should call: chat, sms, call, log', function () {
            home.notify.chat = sinon.spy();
            home.notify.sms = sinon.spy();
            home.notify.call = sinon.spy();
            home.notify.log = sinon.spy();
            req = res = {};
            res.send = sinon.spy();

            home.sos(req, res);
            
            assert(home.notify.chat.calledOnce);
            assert(home.notify.sms.calledOnce);
            assert(home.notify.call.calledOnce);
            assert(home.notify.log.calledOnce);
            assert(res.send.calledOnce);
        });
    });
    
    describe('cancel', function () {
        it('should call: chat, sms, log', function () {
            home.notify.chat = sinon.spy();
            home.notify.sms = sinon.spy();
            home.notify.log = sinon.spy();
            req = res = {};
            res.send = sinon.spy();

            home.cancel(req, res);
            
            assert(home.notify.chat.calledOnce);
            assert(home.notify.sms.calledOnce);
            assert(home.notify.log.calledOnce);
            assert(res.send.calledOnce);
        });
    });
    
    describe('ping', function () {
        it('should call: log', function () {
            home.notify.log = sinon.spy();
            req = res = {};
            res.send = sinon.spy();

            home.cancel(req, res);
            
            assert(home.notify.log.calledOnce);
            assert(res.send.calledOnce);
        });
    });
});