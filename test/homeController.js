var assert = require("assert");
var home = require('../controllers/homeController');

describe('Home controller', function(){
    describe('Get', function(){
        it('should respond with authors', function(){
            assert.ok(home.notify);
        });
    });
});