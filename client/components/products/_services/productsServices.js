import Immutable from 'immutable';

const DefaultState = {
  filter: {},
  page: {},
  products: []
};

/* @ngInject */
export default function productsServices($http) {
  let _data = {};

  return {
    products: _data.products,
    setFilter: function() {

    },
    getProducts() {

    }
  };
}