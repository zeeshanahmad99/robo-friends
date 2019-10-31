import robotActionTypes from "./robots.types";

const INITIAL_STATE = {
  robots: [],
  searchField: "",
  isPending: true,
  error: ''
};

const robotsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case robotActionTypes.SET_ROBOTS:
      return {
        ...state,
        robots: action.payload
      }
    case robotActionTypes.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};

export default robotsReducer;
