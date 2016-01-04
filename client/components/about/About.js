// vendor dependencies
import angular from "angular";
import "angular-ui-router";

// application dependencies
import Components from "../../_components/Components";
import Constants from "../../_constants/Constants";
import Services from  "../../_services/Services";

// module dependencies
import AboutController from "./AboutController";
import template from "./about.html";

const About = angular.module("About", [
  // vendor modules
  "ui.router",

  // app modules
  Components.name,
  Constants.name,
  Services.name
]);

function aboutConfig($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    controller: AboutController,
    controllerAs: "about",
    template
  });
}

About.config(aboutConfig);

export default About;