export default class LogoutService {
  /* @ngInject */
  constructor($http, $log, $state, storageService, AccessTokenKey, toastr, DefaultUnauthorizedStateName) {
    this.$http = $http;
    this.$log = $log;
    this.$state = $state;
    this.storageService = storageService;
    this.AccessTokenKey = AccessTokenKey;
    this.DefaultUnauthorizedStateName = DefaultUnauthorizedStateName;
    this.toastr = toastr;
  }

  logout() {
    const redirectUserToDefaultUnauthorizedState = () => {
      this.$log.info("Logged out");
      this.$state.go(this.DefaultUnauthorizedStateName);
    };

    const informUserThatSomethingWhenWrong = (res) => {
      this.$log.error("There was a problem logging you out:", res);
      this.toastr.info("Sorry, there was a problem during logout", "Server Error");
    };

    const alwaysClearTheAccessToken = () => this.storageService.set(this.AccessTokenKey, undefined);

    return this.$http.delete('api/auth/logout')
      .then(
        redirectUserToDefaultUnauthorizedState,
        informUserThatSomethingWhenWrong)
      .finally(alwaysClearTheAccessToken);
  }
}
