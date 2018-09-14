import {
  FETCH_PRODUCT_CATEGORIES,
  FETCH_PRODUCTS_BY_CATEGORY_ID,
  FETCH_PRODUCTS
} from "./types";

const APISERVER = "http://34.216.251.100:5000";

export const fetchCategories = () => dispatch => {
  const url = `${APISERVER}/category`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data);

      dispatch({
        type: FETCH_PRODUCT_CATEGORIES,
        payload: data
      });
    })
    .catch(error => {});
};

export const fetchProductsByCategoryId = id => dispatch => {
  const url = `${APISERVER}/category/${id}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data);

      dispatch({
        type: FETCH_PRODUCTS_BY_CATEGORY_ID,
        payload: data
      });
    })
    .catch(error => {});
};

export const fetchProducts = filters => dispatch => {
  const url = `${APISERVER}/products/`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(filters);
      let products = data;

      if (!!filters && filters.length > 0) {
        products = products.filter(product =>
          filters.find(filter => parseInt(filter, 10) === product.category_id)
        );
      }

      dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(error => {});
};
