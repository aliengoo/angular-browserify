/* @ngInject */
export default function logoutService($http, $log, localStorageService, AccessTokenKey, toastr) {
  return {
    logout
  };

  function logout() {
    return $http.delete('api/auth/logout').then(() => {
      $log.info("Logged out");
    }, (res) => {
      $log.error("There was a problem logging you out:", res);
      toastr.info("Sorry, there was a problem during logout", "Server Error");
    }).finally(() => {
      localStorageService.remove(AccessTokenKey);
    });
  }
}