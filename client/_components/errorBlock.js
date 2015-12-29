export default function errorBlock() {
  return {
    restrict: "E",
    transclude: true,
    require: '^form',
    scope: true,
    template:
      `
        <div class="error-block" ng-transclude>
        </div>
      `,
    link: (scope, elements, attributes, formController) => {
      scope.form = formController;
    }
  };
}
