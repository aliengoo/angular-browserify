export default class LoginController {
  /* @ngInject */
  constructor($state, $log, userNotifierService, loginService, DefaultAuthorizedStateName) {
    this.$state = $state;
    this.$log = $log;
    this.userNotifierService = userNotifierService;
    this.loginService = loginService;
    this.DefaultAuthorizedStateName = DefaultAuthorizedStateName;
    this.credentials = {
      username: "test@test.com", password: "trustno1"
    };
    this.loading = false;
  }

  login() {
    this.loading = true;

    // success
    const redirectUserToDefaultAuthorizedState = () => {
      this.$state.go(this.DefaultAuthorizedStateName);
      this.userNotifierService.info("You're logged in", "Login Successful");
    };

    // error
    const informUserSomethingWentWrong = (res) => {
      if (res.isUnauthorized()) {
        this.userNotifierService.error(`Invalid username or password`, "Login Failed");
      } else {
        this.userNotifierService.error(`The server responded with ${res.status} - ${res.statusText}`, "Login Error");
        this.$log.error(res);
      }
    };

    // finally
    const endLoadingState = () => this.loading = false;

    this.loginService.login(this.credentials).then(
      redirectUserToDefaultAuthorizedState,
      informUserSomethingWentWrong)
      .finally(endLoadingState);
  }
}
