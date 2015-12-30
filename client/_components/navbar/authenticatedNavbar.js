import template from './authenticatedNavbar.html';

/* @ngInject */
export default function authenticatedNavbar(logoutService, navigationService, $router) {
  return {
    restrict: 'E',
    template,
    scope: {
      component: '@'
    },
    link: (scope) => {
      scope.loading = false;

      scope.logout = () => {
        scope.loading = true;
        logoutService.logout().then(() => {
          navigationService.navigate($router, 'login');
        }).finally(() => scope.loading = false);
      };
    }
  };
}