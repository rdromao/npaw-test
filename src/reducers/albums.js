import * as ACTIONS from "../actions/actionTypesConstants";

const initialState = {
  results: []
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_SEARCH:
      return {
        ...state,
        results: action.albums.results
      };
    default:
      return state;
  }
};

export default albums;
