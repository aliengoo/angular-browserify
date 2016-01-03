
export default class ProductController {
  /* @ngInject */
  constructor($state, $stateParams, $log, productService, product) {
    this.$state = $state;
    this.$log = $log;
    this.isNew = !!$stateParams.id;
    this.productService = productService;
    this.product = product || {};
    this.loading = false;
  }

  save() {
    // TODO: handle errors
    this.loading = true;
    if (this.isNew) {
      this.productService.insert(this.product).then((res) => {
        this.$state.go('existingProduct', {
          id: res.data._id
        });
      }, $log.error).finally(() => this.loading = false);
    }
  }

  remove() {
    // TODO: handle errors
    this.loading = true;

    if (!this.isNew) {
      this.productService.remove(this.product._id).then(() => {
        this.$state.go('products');
      }, $log.error).finally(() => this.loading = false);
    }
  }
}
