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
          </ul>
         </div>
      </div>
    </div>
  </div>
`;