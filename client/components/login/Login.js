import angular from 'angular';
import 'angular-messages';
import 'angular-new-router';

// module imports
import '../../_services/Services';
import '../../_constants/Constants';
import '../../_components/Components';

import LoginController from './LoginController';

import loginUsernameInput from './_components/loginUsernameInput';
import loginPasswordInput from './_components/loginPasswordInput';
import loginService from './loginService';
import template from './login.html';

function loginRun($templateCache) {
  $templateCache.put('./components/login/login.html', template);
}

const Login = angular.module('Login',
  [
    'ngNewRouter',
    'ngAnimate',
    'ngMessages',
    'Components',
    'Constants',
    'Services'
  ])
  .directive('loginUsernameInput', loginUsernameInput)
  .directive('loginPasswordInput', loginPasswordInput)
  .service('loginService', loginService)
  .controller('LoginController', LoginController)
  .run(loginRun);

export default Login;