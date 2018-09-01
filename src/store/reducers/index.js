import { combineReducers } from "redux";
import productReducer from "./productReducer";
import filterReducer from "./filterReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  products: productReducer,
  filters: filterReducer,
  cart: cartReducer
});

export const getTotalAmount = state =>
  state.cart.items
    .reduce((total, it) => total + (it.quantity * it.price) / 100, 0)
    .toFixed(2);
