import angular from 'angular';
import 'angular-ui-router';
import 'angular-toastr';

import registrationService from './registrationService';
import RegistrationController from './RegistrationController';
import template from './registrationTemplate';

import registrationPasswordInput from './_components/registrationPasswordInput';
import registrationUsernameInput from './_components/registrationUsernameInput';

// configuration
/* @ngInject */
function registrationConfig($stateProvider) {
  $stateProvider.state('registration', {
    url: '/registration',
    controller: RegistrationController,
    controllerAs: "vm",
    template
  });
}

// module declaration
const Registration = angular.module('Registration', ['Services', 'toastr', 'ui.router']);

// module bindings
Registration.config(registrationConfig);

Registration.service('registrationService', registrationService);

Registration.directive('registrationUsernameInput', registrationUsernameInput);
Registration.directive('registrationPasswordInput', registrationPasswordInput);

export default Registration;