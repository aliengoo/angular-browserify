export default function pageHeader () {
  return {
    restrict: "E",
    transclude: true,
    template:
      `
        <header>
          <h1 ng-transclude></h1>
        </header>
      `
  };
}

