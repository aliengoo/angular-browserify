/* @ngInject */
function logoutService($http, $log, localStorageService, AccessTokenKey, toastr) {
  return {
    logout: () => {
      return $http.delete('api/auth/logout').then(() => {
        console.info("Logged out")
      }, (res) => {
        $log.error("There was a problem logging you out:", res);
        toastr.info("Sorry, there was a problem during logout", "Server Error");
      }).finally(() => {
        localStorageService.remove(AccessTokenKey);
      });
    }
  };
}

export default logoutService;