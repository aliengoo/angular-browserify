export default
`
  <div id="products">
    <authenticated-navbar component="products"></authenticated-navbar>
    <div class="container-fluid">
      <page-header>
        Products
        <nav>
          <a ng-link="createProduct" ng-disabled="products.loading">Create <i class="fa fa-plus"></i></a>
        </nav>
      </page-header>
      <div class="col-lg-12">
        TODO
      </div>
    </div>
  </div>
`;