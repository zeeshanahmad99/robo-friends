import robotActionTypes from "./robots.types";

export const setRobots = robots => ({
    type: robotActionTypes.SET_ROBOTS,
    payload: robots
});

export const setSearchField = text => ({
    type: robotActionTypes.CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => dispatch => {
    dispatch({ type: robotActionTypes.REQUEST_ROBOTS_START });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(users =>
        dispatch({
          type: robotActionTypes.REQUEST_ROBOTS_SUCCESS,
          payload: users
        })
      )
      .catch(error =>
        dispatch({
          type: robotActionTypes.REQUEST_ROBOTS_FAILED,
          payload: error
        })
      );
  };