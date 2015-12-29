import _ from 'lodash';

/* @ngInject */
function authRun($rootScope, $state, verifyAccessService) {
  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {

    event.preventDefault();

    if (toState.name.startsWith('auth')) {
      verifyAccessService.verify().then((res) => {
        let success = _.get(res, 'data.success', false);

        if (success) {
          $state.go(toState, toParams);
          return;
        }

        $state.go('login');
      });
    }

    $state.go(toState, toParams);
  });
}