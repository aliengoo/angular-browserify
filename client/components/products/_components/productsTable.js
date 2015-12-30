export default function productsTable() {
  return {
    restrict: 'E',
    scope: {
      products: '='
    },
    template: `
      <table class="table table-hover table-responsive" ng-show="products">
        <thead>
          <tr>
            <th>Name</th>
            <th>TODO</th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="p in products">
            <td>{{p.name}}</td>
            <td>TODO</td>
          </tr>
        </tbody>
      </table>
    `
  };
}