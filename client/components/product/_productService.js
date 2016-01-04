/* @ngInject */
export default function productService($http) {
  return {
    /**
     * Get a product
     * @param id
     * @returns {*}
     */
    get: (id) => {
      return $http.get(`api/product/${id}`);
    },

    /**
     * Insert a new product
     * @param product
     * @returns {*}
     */
    insert: (product) => {
      return $http.post(`api/product`, product);
    },

    /**
     * Update an existing product
     * @param product
     * @returns {*}
     */
    update: (product) => {
      return $http.put(`api/product/${product._id}`, product);
    },

    /**
     * Remove a product
     * @param id
     * @returns {*}
     */
    remove: (id) => {
      return $http.delete(`api/product/${id}`);
    }
  };
}
