export default class UserNotifierService {
  /* @ngInject */
  constructor($log, toastr) {
    this.$log = $log;
    this.toastr = toastr;
  }

  info(message, title) {
    console.log("Notification");
    this.$log.info(`${title}: ${message}`);
    this.toastr.info(message, title);
  }

  error(message, title) {
    this.$log.error(`${title}: ${message}`);
    this.toastr.error(message, title);
  }

  warn() {
    this.$log.warn(`${title}: ${message}`);
    this.toastr.warn(message, title);
  }
}