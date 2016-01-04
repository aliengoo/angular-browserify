export default class ProductService {
  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  get(id) {
    return this.$http.get(`api/product/${id}`);
  }

  insert(product) {
    return this.$http.post(`api/product`, product);
  }

  remove(id) {
    return this.$http.delete(`api/product/${id}`);
  }

  update(product) {
    return this.$http.put(`api/product/${product._id}`, product);
  }
}
