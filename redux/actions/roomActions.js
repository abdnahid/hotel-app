import axios from "axios";
import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  CURRENT_ROOM_FAIL,
  CURRENT_ROOM_SUCCESS,
  CURRENT_ROOM_LOADING,
  CLEAR_ERRORS,
} from "../constants/roomConstants";
import absoluteUrl from "next-absolute-url";

//@desc fetch rooms
//GET api/rooms?queries
//public
export const getAllRooms = (req, resolvedUrl) => async (dispatch) => {
  const { origin } = absoluteUrl(req);
  try {
    const { data } = await axios.get(`${origin}/api${resolvedUrl}`);
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ROOMS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//@desc filter rooms with features
//POST /api/rooms?queries
//access public
export const currentRoom = (req, resolvedUrl) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    dispatch({
      type: CURRENT_ROOM_LOADING,
    });
    const { data } = await axios.get(`${origin}/api${resolvedUrl}`);
    dispatch({
      type: CURRENT_ROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CURRENT_ROOM_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
