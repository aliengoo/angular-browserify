class LoginController {
  /* @ngInject */
  constructor($router, $location, $log, toastr, loginService) {
    this.$router = $router;
    this.$location = $location;
    this.name = "login";
    this.$log = $log;
    this.loginService = loginService;
    this.toastr = toastr;
    this.credentials = {
      username: 'glenn@phooby.net', password: 'trustno1'
    };
    this.loading = false;
  }

  login() {
    this.loading = true;

    this.loginService.login(this.credentials).then(() => {
      this.$router.navigate('home').then((url) => {
        this.$location.url(url);
      }, (error) => {
        this.$log.error(error);
      });
    }, (res) => {
      if (res.status === 401) {
        this.toastr.error('Invalid username or password', 'Login Failed');
      } else {
        this.toastr.error(`The server responded with ${res.status} - ${res.statusText}`, 'Login Error');
        this.$log.error(res);
      }
    }).finally(() => {
      this.loading = false;
    });
  }
}

export default LoginController;
