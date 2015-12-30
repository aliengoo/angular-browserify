import angular from 'angular';
import 'angular-new-router';
import 'angular-toastr';

import template from './products.html';
import ProductsController from './ProductsController';

function productsRun($templateCache) {
  $templateCache.put('./components/products/products.html', template);
}

const Products = angular.module('Products', ['Services', 'Constants', 'Components', 'toastr', 'ngNewRouter']);

Products.run(productsRun);
Products.controller('ProductsController', ProductsController);