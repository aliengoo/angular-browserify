/* @ngInject */
export default function productService($http) {
  return {
    get: (id) => {
      return $http.get(`api/product/${id}`);
    },

    insert: (product) => {
      return $http.post(`api/product`, product);
    },

    update: (product) => {
      return $http.put(`api/product/${product._id}`, product);
    },

    remove: (id) => {
      return $http.delete(`api/product/${id}`);
    }
  };
}
