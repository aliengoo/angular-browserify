export default
`
  <div class="authenticatedNavbar">
    <div class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Angular + Browserify</a>
        </div>

         <div class="collapse navbar-collapse" id="navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li ng-class="{'active': component === 'home'}">
              <a ng-link="home">Home</a>
            </li>
            <li ng-class="{'active': component === 'about'}">
              <a ng-link="about">About</a>
            </li>
            <li ng-class="{'active': component === 'products'}">
              <a ng-link="products">Products</a>
            </li>
          </ul>
           <div class="nav navbar-nav navbar-right">
              <button type="button" ng-click="logout()" class="btn btn-warning navbar-logout">Logout</button>
           </div>
         </div>
      </div>
    </div>
  </div>
`;