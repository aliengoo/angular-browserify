export default function controlLabel() {
  return {
    restrict: 'E',
    transclude: true,
    template: `
      <label class="control-label" ng-transclude></label>
    `
  };
}
