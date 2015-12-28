import 'angular-ui-router';
import LoginController from './LoginController';
import LoginTemplate from './LoginTemplate';

function LoginConfig($stateProvider) {
  $stateProvider.state('/login', {
    url: '/login',
    controller: LoginController,
    controllerAs: "vm",
    template: LoginTemplate
  });
}

LoginConfig.$inject = ['$stateProvider'];

export default LoginConfig;
