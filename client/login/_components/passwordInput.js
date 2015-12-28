export default function passwordInput() {
  return {
    restrict: 'E',
    scope: {
      password: '='
    },
    template:
      `
        <div ng-form="passwordInputForm">
          <form-group>
            <control-label>Password</control-label>
            <input type="password" class="form-control" required maxlength="50" ng-model="password" name="password">
            <error-block>
              <ng-messages for="passwordInputForm.password.$error" role="alert">
                <ng-message when="required">Password is required</ng-message>
              </ng-messages>
            </error-block>
          </form-group>

        </div>
      `
  };
}
