import axios from "axios";
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_LOADING,
} from "../constants/userConstants";
import absoluteUrl from "next-absolute-url";

//@desc fetch rooms
//GET api/rooms?queries
//public
export const getUserDetails = (req, id) => async (dispatch) => {
  const { origin } = absoluteUrl(req);
  try {
    const { data } = await axios.get(`${origin}/api/user/${id}`);
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
