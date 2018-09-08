import { combineReducers } from "redux";
import productReducer from "./productReducer";
import filterReducer from "./filterReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  products: productReducer,
  filters: filterReducer,
  cart: cartReducer
});

export const getTotalAmount = state => {
  const { addedItemIds, quantityById } = state.cart;
  const { items } = state.products;
  if (addedItemIds.length === 0) {
    return 0;
  }
  return parseFloat(
    addedItemIds
      .reduce(
        (total, productId) =>
          total + quantityById[productId] * items[productId].price,
        0
      )
      .toFixed(2)
  );
};
