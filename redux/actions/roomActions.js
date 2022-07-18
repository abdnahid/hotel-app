import axios from 'axios';
import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  CLEAR_ERROS,
} from '../constants/roomConstants';
import absoluteUrl from 'next-absolute-url';

export const getAllRooms = (req) => async (dispatch) => {
  const { origin } = absoluteUrl(req);
  //query.location&&`location=${query.location}`
  try {
    const { data } = await axios.get(`${origin}/api/rooms`);
    //console.log(data)
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

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROS,
  });
};
