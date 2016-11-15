(function functionName() {

    angular.module('common').service('ProductService', ProductService);

    ProductService.$inject = ['$http', 'ApiPath'];

    function ProductService($http, ApiPath) {

        var service = this;

        service.getDetails = function () {

            return $http.get(ApiPath + '/categories').then(function(response){
                return response.data;
            });
        };
    }

}) ();
