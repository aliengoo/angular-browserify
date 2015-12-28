import store from 'store';

export default class AuthenticationService {
  constructor($http) {
    this.$http = $http;
  }

  verify() {

  }

  login(username, password) {
    let data = {
      username, password
    };

    return $http.post('/api/authenticate', data);
  }

  setToken(token = "") {
    store.set('accessToken', token);
  }
};

AuthenticationService.$inject = ['$http'];
