export default class LoginController {
  constructor($timeout) {
    this.username = "test@test.";
    this.password = "password";
    this.loading = false;
  }

  login() {
    this.loading = !this.loading;
  }
}

LoginController.$inject = ['$timeout'];
