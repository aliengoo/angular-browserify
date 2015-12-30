import angular from 'angular';
import HomeController from './HomeController';
import '../../_services/Services';
import '../../_constants/Constants';

import template from './home.html';

function homeRun($templateCache) {
  $templateCache.put('./components/home/home.html', template);
}

const Home = angular.module('Home', [
  'ngNewRouter',
  'ngAnimate',
  'ngMessages',
  'toastr',
  'LocalStorageModule',
  'Constants',
  'Services'
]);

Home.run(homeRun);
Home.controller('HomeController', HomeController);

export default Home;
