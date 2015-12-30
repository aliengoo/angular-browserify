function navigationService($q, $log, $location, $rootScope) {

  let $navigationServiceScope = $rootScope.$new();

  return {
    navigate: function($controllerRouter, component) {

      let defer = $q.defer();

      if (!$controllerRouter) {
        const reason = 'navigationService.navigate requires a $router instance from the current controller';
        $log.error(reason);

        throw reason;
      }

      if (!component) {
        const reason = 'navigationService.navigate requires a component string to navigate';
        $log.error(reason);

        throw reason;
      }

      $controllerRouter.navigate(component).then((url) => {
        if (!url) {
          defer.reject(`${component} navigation failed to generate a URL`);
        } else {
          $navigationServiceScope.$applyAsync(function(){
            $location.url(url);
          });
          defer.resolve();
        }
      }, (error) => {
        $log.error('navigationService.navigate encountered an error:', error);
        defer.reject(error);
      });

      return defer.promise;
    }
  };
}

export default navigationService;