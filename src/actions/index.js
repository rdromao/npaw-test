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

// Async actions
export function searchAPICall() {
  return dispatch => {
    dispatch(goSearch());
    /*global fetchJsonp*/
    fetchJsonp(
      "https://itunes.apple.com/search?term=jack+johnson&entity=album&limit=20"
    )
      .then(res => res.json())
      .then(json => dispatch(receiveSearchResults(json)));
  };
}
