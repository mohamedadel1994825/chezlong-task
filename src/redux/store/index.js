import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import {reactotron} from './ReactotronConfig';
import {persistReducer} from 'redux-persist';
import { rootReducer } from '../reducers/index';
import { AsyncStorage } from 'react-native';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['PunchInOut','InWorkInHome']
  // blacklist: ['PunchInOut','InWorkInHome'],

};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(ReduxThunk),
    reactotron.createEnhancer(),
  )
);
export default store;
