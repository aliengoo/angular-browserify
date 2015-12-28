import angular from 'angular';
import 'angular-messages';
import 'angular-ui-router'
import LoginConfig from './LoginConfig';
import LoginController from './LoginController';
import '../_components/Components';
import usernameInput from './_components/usernameInput';
import passwordInput from './_components/passwordInput';
import Services from '../_services/Services';

const Login = angular.module('Login',
  [
    'ui.router',
    'ngMessages',
    'Components',
    'Services'
  ])
  .controller('LoginController', LoginController)
  .directive('usernameInput', usernameInput)
  .directive('passwordInput', passwordInput)
  .config(LoginConfig);

export default Login;