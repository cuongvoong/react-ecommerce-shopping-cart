import { ADD_TO_CART, UPDATE_ITEM_QUANTITY, DELETE_ITEM } from "./types";

export const addToCart = item => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: item
  });
};

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
