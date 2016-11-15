(function () {

    angular.module('public').controller('ProductController', ProductController);

    ProductController.$inject = ['productDetails'];

    function ProductController(productDetails) {

        var $ctrl = this;

        $ctrl.productDetails = productDetails;
    }
}) ();
