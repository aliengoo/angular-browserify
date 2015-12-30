import $ from 'jquery';

const template = `
  <div ng-form="registrationUsernameInputForm">
    <form-group>
      <control-label>Username</control-label>
      <input
        type="email"
        class="form-control"
        required
        maxlength="50"
        ng-model="credentials.username"
        name="username"
        ng-model-options="{'debounce': 500}">
      <error-block>
        <ng-messages for="registrationUsernameInputForm.username.$error" role="alert">
          <ng-message when="email" class="fade-element">Username must be a valid email</ng-message>
          <ng-message when="required" class="fade-element">Username is required</ng-message>
          <ng-message when="usernameExists" class="fade-element">Username is already in use</ng-message>
        </ng-messages>
      </error-block>
    </form-group>

  </div>
`;

/* @ngInject */
function usernameInput(registrationService) {
  return {
    restrict: 'E',
    scope: {
      credentials: '='
    },
    template,
    link: function (scope, element) {
      const usernameNgModel = angular.element($(element).find('[name="username"]')).controller('ngModel');

      usernameNgModel.$asyncValidators.usernameExists = (modelValue, viewValue) => {
        let username = modelValue || viewValue;

        return registrationService.doesUsernameExist(username);
      };
    }
  };
}

export default usernameInput;
