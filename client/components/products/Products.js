// vendor dependencies
import angular from 'angular';
import 'angular-new-router';
import 'angular-toastr';

// application dependencies
import Services from '../../_services/Services';
import Constants from '../../_constants/Constants';
import Components from '../../_components/Components';

// module dependencies
import template from "./products.html";
import ProductsController from './ProductsController';

const Products = angular.module('Products', [
    // vendor modules
    'ui.router',
    'toastr',

    // application modules
    Services.name,
    Constants.name,
    Components.name
  ]
);

/* @ngInject */
function productsConfig($stateProvider) {
  $stateProvider.state("products", {
    url: "/products",
    controller: ProductsController,
    controllerAs: "products",
    template
  });
}

Products.config(productsConfig);

export default Products;