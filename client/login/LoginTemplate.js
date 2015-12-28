export default
`
   <div class="container">
    <div class="col-lg-offset-4 col-lg-4">
      <page-header>
        Login
      </page-header>

      <form name="loginForm" novalidate ng-submit="vm.login()">
        <username-input username="vm.username"></username-input>
        <password-input password="vm.password"></password-input>

        <button class="btn btn-primary" type="submit">
          Login <i ng-class="{'fa fa-spinner fa-spin': vm.loading}"></i>
        </button>
      </form>

    </div>
   </div>
`
