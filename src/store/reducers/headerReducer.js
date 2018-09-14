import { TOGGLE_SIDE_DRAWER } from "../actions/types";

const initialState = {
  isSideDrawerOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_DRAWER:
      return {
        ...state,
        isSideDrawerOpen: action.payload
      };
    default:
      return state;
  }
};
