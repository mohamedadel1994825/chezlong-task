/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import NavigCont from './src/navigation';
import store from './src/redux/store/index';
const persistStore1 = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <PersistGate persistor={persistStore1} loading={null}>
        <NavigCont />
      </PersistGate>
    </Provider>
  );
};
export default App;
