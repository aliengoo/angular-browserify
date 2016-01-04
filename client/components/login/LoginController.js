export default class LoginController {
  /* @ngInject */
  constructor($state, $log, toastr, loginService, DefaultAuthorizedStateName) {
    this.$state = $state;
    this.name = "login";
    this.$log = $log;
    this.loginService = loginService;
    this.DefaultAuthorizedStateName = DefaultAuthorizedStateName;
    this.toastr = toastr;
    this.credentials = {
      username: "test@test.com", password: "trustno1"
    };
    this.loading = false;
  }

  login() {
    this.loading = true;

    // success
    const redirectUserToDefaultAuthorizedState = () => {
      this.$log.info("login successful");
      this.$state.go(this.DefaultAuthorizedStateName);
    };

    // error
    const informUserSomethingWentWrong = (res) => {
      if (res.isUnauthorized()) {
        this.toastr.error(`Invalid username or password`, 'Login Failed');
      } else {
        this.toastr.error(`The server responded with ${res.status} - ${res.statusText}`, 'Login Error');
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
