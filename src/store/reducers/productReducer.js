import {
  FETCH_PRODUCT_CATEGORIES,
  FETCH_PRODUCTS_BY_CATEGORY_ID,
  FETCH_PRODUCTS
} from "../actions/types";

const initialState = {
  items: [],
  categories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case FETCH_PRODUCTS_BY_CATEGORY_ID:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
