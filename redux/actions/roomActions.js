import axios from "axios";
import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  FILTER_ROOMS_FAIL,
  FILTER_ROOMS_SUCCESS,
  CLEAR_ERROS,
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
export const filterRooms = (host, urlPath, filter) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${host}/api${urlPath}`, filter);
    dispatch({
      type: FILTER_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FILTER_ROOMS_FAIL,
      payload: "hello",
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROS,
  });
};
