export default
`
   <div class="container">
    <div class="col-lg-offset-4 col-lg-4">
      <page-header>
        Registration
      </page-header>

      <form name="registrationForm" novalidate ng-submit="vm.register()">
        <registration-username-input credentials="vm.credentials"></registration-username-input>
        <registration-password-input credentials="vm.credentials"></registration-password-input>

        <button class="btn btn-primary" type="submit" ng-disabled="vm.loading || registrationForm.$invalid">
          Register <i ng-class="{'fa fa-spinner fa-spin': vm.loading}"></i>
        </button>

      </form>

    </div>
   </div>
`;