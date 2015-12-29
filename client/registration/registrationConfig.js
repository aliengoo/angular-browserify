import 'angular-ui-router';
import RegistrationController from './RegistrationController';

function config($stateProvider) {
  $stateProvider.state('registration', {
    url: '/registration',
    controller: RegistrationController,
    controllerAs: "vm"
  });
}

export default config;