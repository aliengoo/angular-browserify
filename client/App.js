global.angular = require('angular');
global.jQuery = require('jquery');
global.$ = global.jQuery;
import _ from 'lodash';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import './views/Views';
import './_services/Services';
import 'angular-local-storage';
import AppController from './AppController';

import accessTokenInterceptor from './_services/accessTokenInterceptor';

/* @ngInject */
function appConfig($httpProvider, $urlRouterProvider, localStorageServiceProvider, $logProvider) {

  $httpProvider.interceptors.push(accessTokenInterceptor);
  $httpProvider.useLegacyPromiseExtensions = false;

  $urlRouterProvider.otherwise('/login');

  localStorageServiceProvider.setPrefix('angular-browserify.app');
  localStorageServiceProvider.setStorageType('localStorage'); // default

  $logProvider.debugEnabled(true);
}

/* @ngInject */
const App = angular.module('App',
  [
    'ui.router',
    'LocalStorageModule',
    'Services',
    'Views'
  ]);

App.controller('AppController', AppController);
App.config(appConfig);





