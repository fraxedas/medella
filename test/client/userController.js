'use strict';

describe('UserController', function () {
    var $controllerConstructor, scope, medella, userData;

    beforeEach(module("medella"));

    beforeEach(inject(function ($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        medella = sinon.stub({ username: 'fraxedas@gmail.com' });
        userData = sinon.stub({ 
            get: function (user, callback) { }
        });
    }));

    it('Set the scope', function () {
        $controllerConstructor("UserController",
            { '$scope': scope, medella: medella, userData: userData });

        ok(true);
    })
});