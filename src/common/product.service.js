(function functionName() {
    "use strict";

    angular.module('common').service('ProductService', ProductService);

    ProductService.$inject = ['$http', 'ApiPath'];

    function ProductService($http, ApiPath) {

        var service = this;

        service.getDetails = function () {

            return $http.get(ApiPath + '/categories.json').then(function(response){
                return response.data;
            });
        };
    }

}) ();
