class AppController {
  constructor($router) {
    this.name = "app";

    $router.config([
      // public routes
      {path: '/', redirectTo: '/login'},
      {path: '/login', component: 'login'},
      {path: '/registration', component: 'registration'},

      // authenticated routes
      {path: '/home', component: 'home'},
      {path: '/about', component: 'about'},
      {path: '/products', component: 'products'}
    ]);
  }
}

export default AppController;
