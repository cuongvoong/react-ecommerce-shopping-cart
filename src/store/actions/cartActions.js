import {
  ADD_TO_CART,
  // FETCH_CART_ITEMS,
  UPDATE_ITEM_QUANTITY,
  DELETE_ITEM
} from "./types";

export const addToCart = item => dispatch => {
  //   console.log(item);
  dispatch({
    type: ADD_TO_CART,
    payload: item
  });
};

// export const fetchCartItems = item => dispatch => {
//   dispatch({
//     type: FETCH_CART_ITEMS,
//     payload: item
//   });
// };

export const updateItemQuantity = (id, value) => dispatch => {
  dispatch({
    type: UPDATE_ITEM_QUANTITY,
    payload: { id, value }
  });
};

export const deleteItem = id => dispatch => {
  dispatch({
    type: DELETE_ITEM,
    payload: id
  });
};
