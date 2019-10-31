import robotActionTypes from "./robots.types";

const INITIAL_STATE = {
  robots: [],
  searchField: "",
  isLoading: false,
  error: ''
};

const robotsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case robotActionTypes.SET_ROBOTS:
      return {
        ...state,
        robots: action.payload
      }

    case robotActionTypes.REQUEST_ROBOTS_START:
      return {
        ...state,
        isLoading: true
      }
    case robotActionTypes.REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        robots: action.payload
      }
    case robotActionTypes.REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
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
