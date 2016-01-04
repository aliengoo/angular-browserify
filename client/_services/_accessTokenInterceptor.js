/* @ngInject */
export default function accessTokenInterceptor(localStorageService, AccessTokenKey) {

  function request(config) {
    var accessToken = localStorageService.get(AccessTokenKey);

    if (accessToken) {
      config.headers['x-access-token'] = accessToken;
    }

    return config;
  }

  return {
    request
  };

}