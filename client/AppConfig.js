import 'angular-ui-router';
import AuthenticationInterceptor from './_services/AuthenticationInterceptor';


function AppConfig($httpProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $httpProvider.interceptors.push(AuthenticationInterceptor);
}

AppConfig.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'];

export default AppConfig;

