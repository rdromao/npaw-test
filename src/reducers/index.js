import { combineReducers } from "redux";
import app from "./app";
import albums from "./albums";

const musicSearchAppRootReducer = combineReducers({
  app,
  albums
});

export default musicSearchAppRootReducer;
