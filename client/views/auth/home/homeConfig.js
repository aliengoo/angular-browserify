import HomeController from './HomeController';
import template from './homeTemplate';

/* @ngInject */
function homeConfig($stateProvider) {
  $stateProvider.state('auth.home', {
    url: '/home',
    controller: HomeController,
    controllerAs: 'vm',
    template
  });
}

export default homeConfig;
