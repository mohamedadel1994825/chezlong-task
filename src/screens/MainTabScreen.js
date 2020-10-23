import React from 'react';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailsSCreen from './Settings';
import TasksScreen from './TasksScreen';
import ChatScreen from './ChatScreen';
import Emergency from './Emergency';
import Settings from './Settings';
import { Platform } from 'react-native';
const Tab = createBottomTabNavigator();
const TasksStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ChatStack = createStackNavigator();
const EmergencyStack = createStackNavigator();
const MainTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        animationEnabled: Platform.OS == 'ios' ? true : false,
        gestureEnabled: true,
        unmountOnBlur: true,
      }}
      tabBarOptions={{
        activeTintColor: '#3CA8C1',
        inactiveTintColor: '#B1BDD1',
        labelStyle: styles.title,
        labelPosition: 'below-icon',
        tabStyle: styles.tabStyle,
        keyboardHidesTabBar: true,
        style: styles.tabContainer,
      }}>
      <Tab.Screen
        name="Threapits"
        component={TasksStackScreen}
        options={{
          title: 'Threapits',
          tabBarIcon: ({color}) => {
            return (
              <Fontisto
              name="doctor"
              size={25}
              color={color}
              style={{height:26}}
            />

            );
          },
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={SettingsStackScreen}
        options={{
          title: 'Bookings',
          tabBarIcon: ({color}) => {
            return (
              <Icon name="calendar" type="font-awesome" size={22} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Texting"
        component={EmergencyStackScreen}
        options={{
          title: ({color}) => {
            return <Text style={{color:color,fontSize:14}}>Texting</Text>;
          },
          tabBarIcon: ({color}) => {
            return (
              <Icon
                name="chatbox-ellipses-outline"
                size={25}
                color={color}
                style={{height:26}}
                type="ionicon"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Blog"
        component={SettingsStackScreen}
        options={{
          title: 'Blog',
          tabBarIcon: ({color}) => {
            return (
              <Icon name="blog" type="font-awesome-5" size={22} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={SettingsStackScreen}
        options={{
          title: 'More',
          tabBarIcon: ({color}) => {
            return (
              <MaterialCommunityIcons name="dots-horizontal" size={22} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: 55,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  tabStyle: {
    height: 40,
    alignSelf: 'center',
  },
});
export default MainTabScreen;
const TasksStackScreen = () => {
  const navigation = useNavigation();
  return (
    <TasksStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009837',
        },
        headerTintColor: '#fff',
      }}>
      <TasksStack.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          headerShown: false,
        }}
      />
    </TasksStack.Navigator>
  );
};
const SettingsStackScreen = () => {
  const navigation = useNavigation();
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff4d88',
        },
        headerTintColor: '#fff',
      }}>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
    </SettingsStack.Navigator>
  );
};

const ChatStackScreen = () => {
  const navigation = useNavigation();
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4d88ff',
        },
        headerTintColor: '#fff',
        headerShown:false
      }}>
      <ChatStack.Screen
        name="Chat"
        component={ChatScreen}
        />
    </ChatStack.Navigator>
  );
};

const EmergencyStackScreen = () => {
  const navigation = useNavigation();
  return (
    <EmergencyStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffc61a',
        },
        headerTintColor: '#fff',
      }}>
      <EmergencyStack.Screen
        name="Emergency"
        component={Emergency}
        />
    </EmergencyStack.Navigator>
  );
};
