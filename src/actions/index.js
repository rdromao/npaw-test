import * as ACTIONS from "./actionTypesConstants";
import fetchJsonp from "fetch-jsonp";

export const goSearch = () => {
  return {
    type: ACTIONS.GO_SEARCH
  };
};

export const receiveSearchResults = albums => {
  return {
    type: ACTIONS.RECEIVE_SEARCH,
    albums
  };
};

export const changeResultMode = newMode => {
  return {
    type: ACTIONS.CHANGE_RESULTS_MODE,
    newMode
  };
};

export const showNotification = newNotificationMessage => {
  return {
    type: ACTIONS.SHOW_NOTIFICATION,
    newNotificationMessage
  };
};

export const hideNotification = () => {
  return {
    type: ACTIONS.HIDE_NOTIFICATION
  };
};

// Async actions
export function searchAPICall(terms) {
  return dispatch => {
    dispatch(goSearch());
    /*global fetchJsonp*/
    fetchJsonp(
      "https://itunes.apple.com/search?term=" +
        encodeURIComponent(terms) +
        "&entity=album"
    )
      .then(res => res.json())
      .then(json => {
        if (json.results.length === 0) {
          dispatch(showNotification("No results found"));
          setTimeout(() => dispatch(hideNotification()), 3000);
        }
        dispatch(receiveSearchResults(json));
      })
      .catch(error => {
        dispatch(
          showNotification(
            "An error occured reaching the iTunes API. Try again later"
          )
        );
        setTimeout(() => dispatch(hideNotification()), 3000);
      });
  };
}
