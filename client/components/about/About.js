import angular from 'angular';
import '../../_components/Components';
import '../../_services/Services';
import '../../_constants/Constants';

import AboutController from './AboutController';
import template from './about.html';

/* @ngInject */
function aboutRun($templateCache) {
  $templateCache.put('./components/about/about.html', template);
}

const About = angular.module('About', ['ngNewRouter', 'Services', 'Components', 'Constants']);
About.run(aboutRun);

export default About;