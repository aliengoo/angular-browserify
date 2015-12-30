import _ from 'lodash';

/* @ngInject */
function loginService($http, $q, AccessTokenKey, localStorageService) {

  return {
    login: function (credentials) {
      let defer = $q.defer();

      $http.post('/api/authenticate', credentials).then((res) => {

        const success = _.get(res, 'data.success', false);

        if (success) {
          localStorageService.set(AccessTokenKey, res.data.token);
          defer.resolve();
        } else {
          const message = _.get(res, 'data.message', res.statusText);
          defer.reject(message);
        }

      }, (res) => {
        defer.reject(res.statusText);
      });

      return defer.promise;
    }
  };
}

export default loginService;