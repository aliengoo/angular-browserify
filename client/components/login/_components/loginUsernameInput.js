import template from './loginUsernameInput.html';

export default function loginUsernameInput() {
  return {
    restrict: 'E',
    scope: {
      credentials: '='
    },
    template
  };
}
