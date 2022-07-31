import { combineReducers } from "redux";
import { allRoomsReducer, filterRoomsReducer } from "./roomReducers";

const rootReducer = combineReducers({
  allRooms: allRoomsReducer,
  filterRooms: filterRoomsReducer,
});

export default rootReducer;
