import {
  ADD_TO_CART,
  UPDATE_ITEM_QUANTITY,
  DELETE_ITEM
} from "../actions/types";

const initialState = {
  addedItemIds: [],
  quantityById: {},
  totalItems: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addedItemIds: addItemId(state.addedItemIds, action.payload.id),
        quantityById: addQuantityById(state.quantityById, action.payload.id),
        totalItems: (state.totalItems || 0) + 1
      };
    case UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        quantityById: {
          ...state.quantityById,
          [action.payload.id]: action.payload.value
        },
        totalItems: getTotalItems(
          state,
          action.payload.id,
          action.payload.value
        )
      };
    case DELETE_ITEM:
      return {
        ...state,
        addedItemIds: state.addedItemIds.filter(
          item => parseInt(action.payload, 10) !== item
        ),
        quantityById: Object.keys(state.quantityById)
          .filter(key => key !== action.payload)
          .reduce((obj, key) => {
            return {
              ...obj,
              [key]: state.quantityById[key]
            };
          }, {}),
        totalItems: state.totalItems - state.quantityById[action.payload]
      };
    default:
      return state;
  }
};

const addItemId = (state, id) => {
  if (state.indexOf(id) !== -1) {
    return state;
  }

  return [...state, id];
};

const addQuantityById = (state, id) => {
  return {
    ...state,
    [id]: (state[id] || 0) + 1
  };
};

const getTotalItems = (state, id, value) => {
  const oldQuantity = state.quantityById[id];
  const newQuantity = value;

  return parseInt(newQuantity, 10) - oldQuantity + state.totalItems || 0;
};
