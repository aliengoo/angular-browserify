global.angular = require('angular');
global.jQuery = require('jquery');
global.$ = global.jQuery;
import _ from 'lodash';

import angular from 'angular';
import 'angular-animate';
import 'angular-new-router';
import './_services/Services';
import './components/home/Home';
import './components/login/Login';
import './components/registration/Registration';
import 'angular-local-storage';
import AppController from './AppController';

import accessTokenInterceptor from './_services/accessTokenInterceptor';


/* @ngInject */
function appConfig($httpProvider, localStorageServiceProvider, $logProvider) {

  $httpProvider.interceptors.push(accessTokenInterceptor);
  $httpProvider.useLegacyPromiseExtensions = false;

  localStorageServiceProvider.setPrefix('angular-browserify.app');
  localStorageServiceProvider.setStorageType('localStorage'); // default

  $logProvider.debugEnabled(true);
}

/* @ngInject */
const App = angular.module('App',
  [
    'ngNewRouter',
    'LocalStorageModule',
    'Services',
    'Home',
    'Login',
    'Registration'
  ]);

App.controller('AppController', AppController);
App.config(appConfig);





