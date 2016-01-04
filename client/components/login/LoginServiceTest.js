
export default class LoginServiceTest {
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
    return this.$q.when(res.get("success", false))
      .then(
        () => res,
        () => this.$q.reject(res));
  }

  _storeAccessToken(res) {
    return this.storageService.set(this.AccessTokenKey, res.get("token")).then(
      () => res
    );
  }

  login(credentials) {
    const defer = this.$q.defer();

    const catchError = (res) => defer.reject(res);

    const promise = this.$http.post("/api/authenticate", credentials);

    promise
      .then(this._wasAuthenticationSuccessful)
      .then(this._storeAccessToken)
      .then(defer.resolve)
      .catch(catchError);

    return defer.promise;
  }
}