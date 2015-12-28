global.angular = require('angular');
global.jQuery = require('jquery');
global.$ = global.jQuery;

import angular from 'angular';
import 'angular-ui-router';
import './home/Home';
import './login/Login';
import AppController from './AppController';
import AppConfig from './AppConfig';


angular.module('App',
  [
    'ui.router',
    'Login',
    'Home'
  ]).controller('AppController', AppController).config(AppConfig);





