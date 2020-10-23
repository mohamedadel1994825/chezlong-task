import * as types from '../../constants';
const initialState = {
  searchData:[],
  profileData:null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_THERPIST_PENDING:
      return {
        ...state,
        searchData: null,
      };
    case types.GET_THERPIST_SUCCESS:
      return {
        ...state,
        searchData: action.payload,
      };
    case types.GET_THERPIST_ERROR:
      return {
        ...state,
        searchData: null,
      };
      case types.GET_PROFILE_PENDING:
      return {
        ...state,
        profileData: null,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
      };
    case types.GET_THERPIST_ERROR:
      return {
        ...state,
        profileData: null,
      };
    default:
      return state;
  }
};
