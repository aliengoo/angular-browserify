export default function usernameInput() {
  return {
    restrict: 'E',
    scope: {
      credentials: '='
    },
    template:
      `
        <div ng-form="loginUsernameInputForm">
          <form-group>
            <control-label>Username</control-label>
            <input type="email" class="form-control" required maxlength="50" ng-model="credentials.username" name="username" ng-model-options="{'debounce': 500}">
            <error-block>
              <ng-messages for="loginUsernameInputForm.username.$error" role="alert">
                <ng-message when="email" class="fade-element">Username must be a valid email</ng-message>
                <ng-message when="required" class="fade-element">Username is required</ng-message>
              </ng-messages>
            </error-block>
          </form-group>

        </div>
      `
  };
}
