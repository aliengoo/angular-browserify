import store from 'store';

export default class AuthenticationInterceptor {
  constructor($q) {
    this.$q = $q;
  }

  request(config) {

    var token = store.get('accessToken');

    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  }

}

AuthenticationInterceptor.$inject = ['$q'];
