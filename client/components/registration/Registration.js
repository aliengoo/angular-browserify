import angular from "angular";
import "angular-ui-router";
import "angular-toastr";

import registrationService from "./registrationService";
import RegistrationController from "./RegistrationController";

import registrationPasswordInput from "./_components/registrationPasswordInput";
import registrationUsernameInput from "./_components/registrationUsernameInput";
import template from "./registration.html";

// module declaration
const Registration = angular.module("Registration", [
  "Services",
  "toastr",
  "ui.router"]
);

/* @ngInject */
function registrationConfig($stateProvider) {
  $stateProvider.state("registration", {
    url: "/registration",
    controller: RegistrationController,
    controllerAs: "registration",
    template
  });
}

Registration.config(registrationConfig);

Registration.service("registrationService", registrationService);

Registration.directive("registrationUsernameInput", registrationUsernameInput);
Registration.directive("registrationPasswordInput", registrationPasswordInput);

export default Registration;