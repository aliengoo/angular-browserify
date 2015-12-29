class LoginController {
  /* @ngInject */
  constructor($state, $log, toastr, loginService) {
    this.$state = $state;
    this.$log = $log;
    this.loginService = loginService;
    this.toastr = toastr;
    this.credentials = {
      username: null, password: null
    };
    this.loading = false;
  }

  login() {
    this.loading = true;

    this.loginService.login(this.credentials).then(() => {
      this.$state.go('home');
    }, (res) => {
      if (res.status === 401) {
        this.toastr.error('Invalid username or password', 'Login Failed');
      } else {
        this.toastr.error(`The server responded with ${res.status} - ${res.statusTest}`, 'Login Error');
        this.$log.error(res);
      }
    }).finally(() => {
      this.loading = false;
    });
  }
}

export default LoginController;
