import angular from 'angular';
import '../_constants/Constants';
import '../_services/Services';
import 'angular-animate';
import 'angular-local-storage';
import 'angular-messages';
import 'angular-toastr';
import 'angular-ui-router';

import authConfig from './auth/authConfig';
import authRun from './auth/authRun';
import homeConfig from './auth/home/homeConfig';


const Views = angular.module('Views', [
  'ngAnimate',
  'ngMessages',
  'toastr',
  'ui.router',
  'Constants',
  'Services'
]);

Views
  .config(authConfig)
  .run(authRun)
  .config(homeConfig);




