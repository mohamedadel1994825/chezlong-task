import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {connect} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from '../screens/MainTabScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SupportScreen,
  SettingsScreen,
  BookmarkScreen,
  DrawerContent,
} from '../screens';
import LoginScreen from '../screens/LoginScreen';
import Splash from '../screens/Splash';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const NavigCont = (props) => {
  const [isSigned, IsSigned] = React.useState(true);
  let {token} = props.auth;
  return (
    <NavigationContainer
    >
      {token ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          overlayColor={'rgba(126, 143, 165,.64)'}
          drawerStyle={{
            backgroundColor: '#003971',
            borderColor: '#6178A0',
            borderTopRightRadius: 15,
            // borderWidth:1
          }}
          initialRouteName="Threapits"
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen
            name="Threapits"
            component={MainTabScreen}
          />
          <Drawer.Screen name="Support" component={SupportScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          {/* <Drawer.Screen name="Bookmark" component={BookmarkScreen} /> */}
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  txt: {color: '#003971', fontSize: 24, marginLeft: 5},
});
export default connect((state) => state, null)(NavigCont);
