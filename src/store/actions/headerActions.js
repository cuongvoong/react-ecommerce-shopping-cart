import { TOGGLE_SIDE_DRAWER } from "./types";

export const toggleSideDrawer = isSideDrawerOpen => dispatch => {
  dispatch({
    type: TOGGLE_SIDE_DRAWER,
    payload: isSideDrawerOpen
  });
};
