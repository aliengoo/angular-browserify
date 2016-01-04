// globals references
global.angular = require("angular");
global.jQuery = require("jquery");
global.$ = global.jQuery;

// vendor level dependencies
import _ from "lodash";
import angular from "angular";
import "angular-animate";
import "angular-ui-router";
import "angular-local-storage";

// application level dependencies
import Services from "./_services/Services";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Products from "./components/products/Products";
import Registration from "./components/registration/Registration";
import accessTokenInterceptor from "./_services/accessTokenInterceptor";

// module level dependencies
import AppController from "./AppController";

/* @ngInject */
const App = angular.module("App",
  [
    // vendor modules
    "ui.router",
    "LocalStorageModule",

    // application modules
    Services.name,
    Home.name,
    About.name,
    Products.name,
    Login.name,
    Registration.name
  ]);


/* @ngInject */
function appConfig($httpProvider, localStorageServiceProvider, $logProvider) {

  // Intercept all requests to the server, and assign the "x-access-token"; if available
  $httpProvider.interceptors.push(accessTokenInterceptor);

  // disable use of "success" and "error" methods on promise returned from $http
  // See https://docs.angularjs.org/error/$http/legacy
  $httpProvider.useLegacyPromiseExtensions = false;

  // prefix local storage with the application name
  localStorageServiceProvider.setPrefix("angular-browserify.app");
  localStorageServiceProvider.setStorageType("localStorage"); // default

  // enable debug
  // TODO: Update gulpfile to inject the appropriate setting for production builds
  $logProvider.debugEnabled(true);
}

App.config(appConfig);

// AppController is declared on the body element, is not state dependent, and therefore must be explicitly bound to the module
App.controller("AppController", AppController);





