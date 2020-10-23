import * as types from '../../constants';
const initialState = {
    token: false,
    route:null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            return {
                ...state,
                token: true
            }
            case types.SET_ROUTE:
                return{
                    ...state,route:action.payload
                }
        default:
            return state
    }
} 
