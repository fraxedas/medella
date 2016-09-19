describe('userDataService', function () {
    'use strict';

    var httpBackend;
    var name = 'oscar';

    beforeEach(module("medella"));

    beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        httpBackend.when("GET", "/api/user/" + name).respond({name: name});
        $controller('MoviesController', {
            $scope: scope,
            $http: $http
        });
    }));

    describe('get', function () {

        it('should call next with the response', inject(function (userDataService) {
            userDataService.get(name)
        }));

    });
});