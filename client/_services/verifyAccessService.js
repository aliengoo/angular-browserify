/* @ngInject */
function verifyAccessService($http, $q, $log, navigationService) {
  return {
    verify: () => {
      return $http.get('api/auth/authentication/verify');
    },

    canActivateFn: function ($controllerRouter, redirectTo = 'login') {

      if (!$controllerRouter) {
        $log.error('verifyAccessService.canActivateFn requires a $router instance from the current controller');
        throw true;
      }

      let self = this;

      return function () {
        let defer = $q.defer();

        self.verify().then(defer.resolve,
          () => navigationService.navigate($controllerRouter, redirectTo).finally(defer.reject));

        return defer.promise;
      };
    }
  };
}

export default verifyAccessService;