
class AboutController {
  /* @ngInject */
  constructor(verifyAccessService, $router) {
    this.name = 'about';
    this.canActivate = verifyAccessService.canActivateFn($router);
  }
}

export default AboutController;