import template from './authenticatedNavbar.html';

/* @ngInject */
export default function authenticatedNavbar(logoutService, $state) {

  function link(scope) {
    const goToLogin = () => $state.go("login");
    const logoutHasCompleted = () => scope.loading = false;

    scope.loading = false;
    scope.logout = () => {
      scope.loading = true;

      const promise = logoutService.logout();

      promise.then(goToLogin).finally(logoutHasCompleted);
    };
  }

  //noinspection JSUnusedGlobalSymbols
  return {
    restrict: 'E',
    template,
    scope: {
      component: '@'
    },
    link
  };
}