import angular from "angular";
import "angular-ui-router";
import "angular-messages";
import HomeController from "./HomeController";
import Services from "../../_services/Services";
import Constants from "../../_constants/Constants";

import template from "./home.html";

const Home = angular.module("Home", [
  // vendor modules
  "ui.router",
  "ngAnimate",
  "ngMessages",
  "toastr",
  "LocalStorageModule",

  // application dependencies
  Constants.name,
  Services.name
]);

/* @ngInject */
function homeConfig($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    controller: HomeController,
    controllerAs: "home",
    auth: true,
    template
  });
}

Home.config(homeConfig);

export default Home;
