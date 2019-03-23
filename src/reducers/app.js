import * as ACTIONS from "../actions/actionTypesConstants";

const initialState = {
  resultsMode: "grid"
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_RESULTS_MODE:
      return {
        ...state,
        resultsMode: action.newMode
      };
    default:
      return state;
  }
};

export default app;
