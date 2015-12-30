import template from './authenticatedNavbar.html';

/* @ngInject */
export default function authenticatedNavbar() {
  return {
    restrict: 'E',
    template,
    scope: {
      component: '@'
    }
  };
}