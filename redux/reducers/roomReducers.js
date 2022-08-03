import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_LOADING,
  ALL_ROOMS_SUCCESS,
  CURRENT_ROOM_FAIL,
  CURRENT_ROOM_LOADING,
  CURRENT_ROOM_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/roomConstants";

export const allRoomsReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_ROOMS_LOADING:
      return { loading: true };
    case ALL_ROOMS_SUCCESS:
      const { rooms, pages, page, roomsCount } = action.payload;
      return { loading: false, rooms, pages, page, roomsCount };
    case ALL_ROOMS_FAIL:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { error: null };
    default:
      return state;
  }
};
export const currentRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_ROOM_LOADING:
      return { loading: true };
    case CURRENT_ROOM_SUCCESS:
      return { loading: false, roomDetails: action.payload.currentRoom };
    case CURRENT_ROOM_FAIL:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { error: null };
    default:
      return state;
  }
};
