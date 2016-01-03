import angular from 'angular';
import '../../_services/Services';
import '../../_components/Components';
import '../../_constants/Constants';
import ProductController from './ProductController';
import productService from './productService';
import newProductTemplate from './new-product.html';
import existingProductTemplate from './existing-product.html';

const Product = angular.module('Product', ['ui.router', 'ngAnimate', 'ngMessages', 'toastr']);

/* @ngInject */
function productConfig($stateProvider) {
  $stateProvider.state('newProduct', {
    url: '/product',
    controller: ProductController,
    controllerAs: 'product',
    template: newProductTemplate
  });

  $stateProvider.state('existingProduct', {
    url: '/product/:id',
    controller: ProductController,
    controllerAs: 'product',
    template: existingProductTemplate,
    resolve: {
      product: ($stateParams, productService) => productService.get($stateParams.id)
    }
  });
}

Product.config(productConfig);

Product.service('productService', productService);

export default Product;

