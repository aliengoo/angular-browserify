import angular from 'angular';
import 'angular-new-router';
import 'angular-toastr';

import registrationService from './registrationService';
import RegistrationController from './RegistrationController';

import registrationPasswordInput from './_components/registrationPasswordInput';
import registrationUsernameInput from './_components/registrationUsernameInput';
import template from './registration.html';

function registrationRun($templateCache) {
  $templateCache.put('./components/registration/registration.html', template);
}

// module declaration
const Registration = angular.module('Registration', ['Services', 'toastr', 'ngNewRouter']);

Registration.service('registrationService', registrationService);

Registration.controller('RegistrationController', RegistrationController);

Registration.directive('registrationUsernameInput', registrationUsernameInput);
Registration.directive('registrationPasswordInput', registrationPasswordInput);
Registration.run(registrationRun);

export default Registration;