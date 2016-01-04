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

// module level dependencies
import appConfig from "./appConfig";
import appRun from "./appRun";
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

App.config(appConfig);
App.run(appRun);

// AppController is declared on the body element, is not state dependent, and therefore must be explicitly bound to the module
App.controller("AppController", AppController);





