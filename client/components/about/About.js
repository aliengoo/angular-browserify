import angular from 'angular';
import 'angular-ui-router';
import '../../_components/Components';
import '../../_services/Services';
import '../../_constants/Constants';

import AboutController from './AboutController';
import template from './about.html';

const About = angular.module('About', [
  'ui.router',
  'Services',
  'Components',
  'Constants']);

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