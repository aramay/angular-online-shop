(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
  });
    // .state('public.product', {
    //     url:'/product',
    //     templateUrl: 'src/public/products/single_template.html',
    //     controller: 'ProductController as productCtrl',
    //
    //     resolve: {
    //         productDetails: [ProductService, function (ProductService) {
    //
    //             return ProductService.getDetails();
    //         }]
    //     }
    // });
}
})();
