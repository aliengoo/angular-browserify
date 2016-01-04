export default class LoginController {
  /* @ngInject */
  constructor($state, $log, toastr, loginService, loginServiceTest) {
    this.$state = $state;
    this.name = "login";
    this.$log = $log;
    this.loginService = loginService;
    this.loginServiceTest = loginServiceTest;
    this.toastr = toastr;
    this.credentials = {
      username: "test@test.com", password: "trustno1"
    };
    this.loading = false;
  }

  login() {
    this.loading = true;

    this.loginServiceTest.login(this.credentials).then(() => {
      this.$state.go('home');
    }, (res) => {
      if (res.isUnauthorized()) {
        this.toastr.error(`Invalid username or password`, 'Login Failed');
      } else {
        this.toastr.error(`The server responded with ${res.status} - ${res.statusText}`, 'Login Error');
        this.$log.error(res);
      }
    }).finally(() => {
      this.loading = false;
    });
  }
}
