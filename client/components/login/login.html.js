export default `<div class="container">
  <div class="col-lg-offset-4 col-lg-4">
    <page-header>
      Login
    </page-header>

    <form name="loginForm" novalidate ng-submit="login.login()">
      <login-username-input credentials="login.credentials"></login-username-input>
      <login-password-input credentials="login.credentials"></login-password-input>

      <button class="btn btn-primary" type="submit" ng-disabled="login.loading || loginForm.$invalid">
        Login <i ng-class="{'fa fa-spinner fa-spin': login.loading}"></i>
      </button>
    </form>

  </div>
</div>`;