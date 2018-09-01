import {
  ADD_TO_CART,
  FETCH_CART_ITEMS,
  UPDATE_ITEM_QUANTITY
} from "../actions/types";

// const initialState = {
//   addedItemIds: [],
//   quantityById: {}
// };

const initialState = {
  items: [],
  totalItems: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.find(item => item.id === action.payload.id)) {
        return {
          ...state,
          items: Object.assign(
            [],
            state.items.map(item => {
              if (item.id === action.payload.id) {
                item.quantity++;
              }
              return item;
            })
          ),
          totalItems: (state.totalItems || 0) + 1
        };
      } else {
        action.payload.quantity = 1;
        return {
          ...state,
          items: [...state.items, action.payload],
          totalItems: (state.totalItems || 0) + 1
        };
      }
    // const { id } = action.payload;
    // const addedItemIds = addItemId(state.addedItemIds, id);
    // const quantityById = addQuantityById(state.quantityById, id);
    // return {
    //   ...state,
    //   addedItemIds,
    //   quantityById
    // };
    case UPDATE_ITEM_QUANTITY:
      const { id, value } = action.payload;
      let oldQuantity;

      return {
        ...state,
        items: Object.assign(
          [],
          state.items.map(item => {
            if (item.id === parseInt(id, 10)) {
              oldQuantity = item.quantity;
              item.quantity = value;
            }
            return item;
          })
        ),
        totalItems: parseInt(value, 10) - oldQuantity + state.totalItems || 0
      };
    case FETCH_CART_ITEMS:
      return state;
    default:
      return state;
  }
};

// const addItemId = (state, id) => {
//   if (state.indexOf(id) !== -1) {
//     return state;
//   }

//   return [...state, id];
// };

// const addQuantityById = (state, id) => {
//   console.log(state);
//   return {
//     ...state,
//     [id]: (state[id] || 0) + 1
//   };
// };
