class ProductsController {
  /* @ngInject */
  constructor(verifyAccessService, $router) {
    this.name = "products";
    this.loading = false;
    this.canActivate = verifyAccessService.canActivateFn($router);
  }
}

export default ProductsController;