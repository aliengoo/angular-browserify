import template from "./productsTable.html";

export default function productsTable() {
  return {
    restrict: "E",
    scope: {
      products: "="
    },
    template
  };
}