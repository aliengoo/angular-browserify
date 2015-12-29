/* @ngInject */
function accessTokenInterceptor(localStorageService, AccessTokenKey) {
  return {
    request: function(config) {

      var accessToken = localStorageService.get(AccessTokenKey);

      if (accessToken) {
        config.headers['x-access-token'] = accessToken;
      }

      return config;
    }
  };
}

export default accessTokenInterceptor;