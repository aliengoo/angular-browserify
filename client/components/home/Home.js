import angular from 'angular';
import 'angular-ui-router';
import HomeController from './HomeController';
import '../../_services/Services';
import '../../_constants/Constants';

import template from './home.html';


const Home = angular.module('Home', [
  'ui.router',
  'ngAnimate',
  'ngMessages',
  'toastr',
  'LocalStorageModule',
  'Constants',
  'Services'
]);

/* @ngInject */
function homeConfig($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    controller: HomeController,
    template
  });
}

Home.config(homeConfig);

export default Home;
