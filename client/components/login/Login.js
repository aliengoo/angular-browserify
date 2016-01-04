// vendor dependencies
import angular from "angular";

// application dependencies
import Services from "../../_services/Services";
import Constants from "../../_constants/Constants";
import Components from "../../_components/Components";

// module-level dependencies
import LoginController from './LoginController';
import loginUsernameInput from "./_components/loginUsernameInput";
import loginPasswordInput from "./_components/loginPasswordInput";
import loginService from "./loginService";
import LoginServiceTest from "./LoginServiceTest";
import template from "./login.html";

const Login = angular.module("Login", [
  // vendor modules
  "ui.router",
  "ngAnimate",
  "ngMessages",

  // application modules
  Services.name,
  Constants.name,
  Components.name
]);

/* @ngInject */
function loginConfig($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    controller: LoginController,
    controllerAs: "login",
    template
  });
}

Login
  .directive('loginUsernameInput', loginUsernameInput)
  .directive('loginPasswordInput', loginPasswordInput)
  .service('loginService', loginService)
  .service('loginServiceTest', LoginServiceTest)
  .config(loginConfig);

export default Login;