import { combineReducers } from "redux";
import { allRoomsReducer, currentRoomReducer } from "./roomReducers";

const rootReducer = combineReducers({
  allRooms: allRoomsReducer,
  currentRoom: currentRoomReducer,
});

export default rootReducer;
