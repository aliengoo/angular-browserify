export default class HomeController {
  /* @ngInject */
  constructor(verifyAccessService, $router) {
    this.name = 'home';
    this.canActivate = verifyAccessService.canActivateFn($router);
  }
}




