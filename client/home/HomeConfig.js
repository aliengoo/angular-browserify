import 'angular-ui-router';
import HomeController from './HomeController';

function HomeConfig($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    controller: HomeController,
    template:
      `
        <div id="home">
          <header>
            <h1>
              Home
            </h1>
          </header>
        </div>
      `,
    controllerAs: 'vm'
  });

}

HomeConfig.$inject = ['$stateProvider'];


export default HomeConfig;