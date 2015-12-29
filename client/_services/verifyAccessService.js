/* @ngInject */
function verifyAccessService($http) {
  return {
    verify: () => {
      return $http.get('api/auth/authentication/verify');
    }
  };
}

export default verifyAccessService;