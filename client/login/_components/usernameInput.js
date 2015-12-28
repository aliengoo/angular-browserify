export default function usernameInput() {
  return {
    restrict: 'E',
    scope: {
      username: '='
    },
    template:
      `
        <div ng-form="usernameInputForm">
          <form-group>
            <control-label>Username</control-label>
            <input type="email" class="form-control" required maxlength="50" ng-model="username" name="username">
            <error-block>
              <ng-messages for="usernameInputForm.username.$error" role="alert">
                <ng-message when="email">Username must be a valid email</ng-message>
                <ng-message when="required">Username is required</ng-message>
              </ng-messages>
            </error-block>
          </form-group>

        </div>
      `
  };
}
