import angular from 'angular';
import 'angular-messages';
import 'angular-ui-router';

// module imports
import '../_services/Services';
import '../_constants/Constants';
import '../_components/Components';

import LoginController from './LoginController';

import loginUsernameInput from './_components/loginUsernameInput';
import loginPasswordInput from './_components/loginPasswordInput';
import loginService from './loginService';
import template from './loginTemplate';

/* @ngInject */
function loginConfig($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    controller: LoginController,
    controllerAs: "vm",
    template
  });
}

const Login = angular.module('Login',
  [
    'ui.router',
    'ngAnimate',
    'ngMessages',
    'Components',
    'Constants',
    'Services'
  ])
  .directive('loginUsernameInput', loginUsernameInput)
  .directive('loginPasswordInput', loginPasswordInput)
  .service('loginService', loginService)
  .config(loginConfig);

export default Login;