describe('UserController', function () {
    'use strict';

    var $controllerConstructor, scope, medella, userData, userMock;

    beforeEach(module("medella"));

    beforeEach(inject(function ($controller, $rootScope) {

        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        medella = { username: 'fraxedas@gmail.com' };
        userMock = { name: 'Oscar' };
        userData = {
            get: function (user, callback) { callback(userMock) }
        };
    }));

    it('Set the scope', function () {
        $controllerConstructor("UserController",
            { '$scope': scope, medella: medella, userData: userData });

        expect(scope.medella).toBe(medella);
        expect(scope.medella.user).toBe(userMock);
    });
});