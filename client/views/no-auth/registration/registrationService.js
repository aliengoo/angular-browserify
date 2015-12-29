import _ from 'lodash';

/* @ngInject */
function registrationService($http, $q, $log, toastr) {
  return {
    /**
     * Registers the account
     * @param credentials
     * @returns {*}
     */
    register: function (credentials) {
      const config = {
        method: 'POST',
        url: 'api/registration/register',
        data: credentials
      };

      return $http(config);
    },

    /**
     * Checks to see if the username is in use, and if it does; reject
     * @param username
     * @returns {*}
     */
    doesUsernameExist: function (username) {

      let defer = $q.defer();

      const config = {
        method: 'GET',
        url: 'api/registration/does-username-exist',
        params: {
          username
        }
      };

      let onError = (res) => {
        $log.error(res);
        toastr.error('Error checking username', "Registration Error");
      };

      $http(config).then((res) => {
        let success = _.get(res, 'data.success', false);

        if (success) {
          let exists = _.get(res, 'data.exists', false);

          if (exists) {
            defer.reject();
          } else {
            defer.resolve();
          }

        } else {
          defer.reject(res.statusText);
        }
      }, onError);

      return defer.promise;
    }
  };
}


export default registrationService;