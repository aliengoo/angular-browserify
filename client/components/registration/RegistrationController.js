class RegistrationController {

  /* @ngInject */
  constructor($log, registrationService, toastr) {
    this.name = "registration";

    this.credentials = {
      username: null, password: null
    };

    this.$log = $log;
    this.registrationService = registrationService;
    this.toastr = toastr;
    this.loading = false;
  }

  register() {
    this.loading = true;

    this.registrationService.register(this.credentials)
      .then(() => {
        //noinspection JSCheckFunctionSignatures
        this.$state.go("login");
      }, res => {
        this.toastr.error(res.statusText, "Registration Error");
      }).finally(() => {
      this.loading = false;
    });
  }
}

export default RegistrationController;

