import angular from 'angular';
import Constants from '../_constants/Constants';
import logoutService from './logoutService';
import verifyAccessService from './verifyAccessService';
import navigationService from './navigationService';
import 'angular-local-storage';

const Services = angular.module('Services', ['Constants', 'LocalStorageModule']);

Services
  .service('navigationService', navigationService)
  .service('logoutService', logoutService)
  .service('verifyAccessService', verifyAccessService);

export default Services;
