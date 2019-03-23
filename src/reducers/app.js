import * as ACTIONS from "../actions/actionTypesConstants";

const initialState = {
  resultsMode: "grid",
  showNotification: false,
  notificationMessage: ""
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_RESULTS_MODE:
      return {
        ...state,
        resultsMode: action.newMode
      };
    case ACTIONS.SHOW_NOTIFICATION:
      return {
        ...state,
        showNotification: true,
        notificationMessage: action.newNotificationMessage
      };
    case ACTIONS.HIDE_NOTIFICATION:
      return {
        ...state,
        showNotification: false,
        notificationMessage: action.newNotificationMessage
      };
    default:
      return state;
  }
};

export default app;
