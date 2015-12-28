export default function formGroup() {
  return {
    restrict: 'E',
    transclude: true,
    template:
      `
        <div class="form-group" ng-transclude>
        </div>
      `
  };
}
