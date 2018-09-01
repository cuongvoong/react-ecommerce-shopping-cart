import { UPDATE_FILTER } from "./types";

export const updateFilters = filters => dispatch => {
  //   console.log(`Filters: ${filters}`);
  dispatch({
    type: UPDATE_FILTER,
    payload: filters
  });
};
