/* @ngInject */
function authConfig($stateProvider) {
  $stateProvider.state('auth', {
    abstract: true
  });
}

export default authConfig;