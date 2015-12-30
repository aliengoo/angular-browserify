class CreateProductController {
  constructor(verifyAccessService, $router) {
    this.name = "createProduct";
    this.canActivate = verifyAccessService.canActivateFn($router);
  }
}