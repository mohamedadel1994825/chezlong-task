import {AUTHENTICATE,SET_ROUTE} from '../../constants/UserAuth';
export const loginUser = () => async (dispatch) => {
  try {
    dispatch({type: AUTHENTICATE});
  } catch (error) {}
};
export const setRoute = (route) => async (dispatch) => {
  try {
   await dispatch({type: SET_ROUTE,payload:route});
  } catch (error) {}
};
