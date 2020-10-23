import { combineReducers } from 'redux'
import auth from '../reducers/auth/auth'
import doctor from './Doctor'
export const rootReducer = combineReducers({  
  auth,
  doctor
})
