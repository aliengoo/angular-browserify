import template from './loginPasswordInput.html';

export default function loginPasswordInput() {
  return {
    restrict: 'E',
    scope: {
      credentials: '='
    },
    template
  };
}
