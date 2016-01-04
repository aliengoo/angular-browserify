// vendor dependencies
import angular from "angular";

// application dependencies
import Services from "../../_services/Services";
import Components from  "../../_components/Components";
import Constants from "../../_constants/Constants";

// module dependencies
import ProductController from "./ProductController";
import productService from "./productService";
import * as newProductTemplate from "./new-product.html";
import * as existingProductTemplate from "./existing-product.html";

const Product = angular.module("Product", [
  // vendor modules
  "ui.router",
  "ngAnimate",
  "ngMessages",
  "toastr",

  // application modules
  Services.name,
  Components.name,
  Constants.name
]);

/* @ngInject */
function resolveExistingProduct($stateParams, productService) {
  return productService.get($stateParams.id);
}

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
      product: resolveExistingProduct
    }
  });
}

Product.config(productConfig);
Product.service('productService', productService);

export default Product;

