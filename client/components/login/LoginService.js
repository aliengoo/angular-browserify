export default class LoginService {
  /* @ngInject */
  constructor($http, $q, $log, AccessTokenKey, storageService) {
    this.$http = $http;
    this.$log = $log;
    this.$q = $q;
    this.AccessTokenKey = AccessTokenKey;
    this.storageService = storageService;
    this._wasAuthenticationSuccessful = this._wasAuthenticationSuccessful.bind(this);
    this._storeAccessToken = this._storeAccessToken.bind(this);
  }

  _wasAuthenticationSuccessful(res) {
    return this.$q.when(res.getDataValue("success", false))
      .then(
        () => res,
        () => this.$q.reject(res));
  }

  _storeAccessToken(res) {
    return this.storageService.set(this.AccessTokenKey, res.getDataValue("token")).then(
      () => res
    );
  }

  login(credentials) {
    return this.$http.post("/api/authenticate", credentials)
      .then(this._wasAuthenticationSuccessful)
      .then(this._storeAccessToken);
  }
}