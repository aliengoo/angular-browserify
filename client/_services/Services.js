import angular from 'angular';
import AuthenticationService from './AuthenticationService';

angular.module('Services', [])
  .service('authenticationService', AuthenticationService);
