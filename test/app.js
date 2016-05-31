var assert = require("assert");
var data = require("../data");

describe('Initial data', function(){
    describe('The scenario', function(){
        it('should not be empty', function(){
            assert.ok(data.patient);
        });
    });
});