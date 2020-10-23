import Axios from 'axios';
import * as types from '../../constants';
import {baseUrl} from '../../constants';
export const searchTherapist = (name) => async (dispatch) => {
  dispatch({type: types.GET_THERPIST_PENDING});
  try {
    let res = await Axios.get(
      `${baseUrl}/client/listTherapists?page=1&lang=&gender=male&thirtyMins=false&sixtyMins=true&serviceFeesFrom=100&serviceFeesTo=200&therapistName=${name}`,
      {},
    );
    const data = await res.data.data.therapists;
    dispatch({type: types.GET_THERPIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: types.GET_THERPIST_ERROR});
  }
};

export const getProfileData = () => async (dispatch) => {
  dispatch({type: types.GET_PROFILE_PENDING});
  try {
    let res = await Axios.get(`${baseUrl}/client/therapistProfile/hussein.ahmad`, {});
    const data = await res.data.data.basics;
    dispatch({type: types.GET_PROFILE_SUCCESS, payload: data});
  } catch (error) {
    dispatch({type: types.GET_PROFILE_ERROR});
  }
};
