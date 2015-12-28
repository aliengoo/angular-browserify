import 'angular-ui-router';
import HomeConfig from './HomeConfig';
import HomeController from './HomeController';

const Home = angular.module('Home', ['ui.router'])
  .controller('HomeController', HomeController)
  .config(HomeConfig);

export default Home;
