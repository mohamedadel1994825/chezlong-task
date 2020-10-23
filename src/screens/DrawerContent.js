
import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';
import { useRoute } from '@react-navigation/native';
import {DrawerItem, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
const  DrawerContent=(props)=> {
  const{navigation}=props
  return (
    <DrawerContentScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: 0,
        backgroundColor: '#6178A0',
        borderColor: '#6178A0',
        borderTopRightRadius: 15,
      }}
      // {...props}
      >
      <View style={{backgroundColor: 'white', marginTop: 20}}>
        <View
          style={{
            paddingLeft: 20,
            paddingTop: 30,
            borderBottomLeftRadius: 15,
            backgroundColor: '#6178A0',
            paddingBottom: 50,
          }}>
          <Image source={require('../assets/child.jpg')} style={styles.img} />
          <Text style={styles.workerName}>Worker 1</Text>
          <Text style={styles.workerMail}>@Worker123</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white', paddingTop: 30}}>
        <DrawerItem
          label="Profile"
          labelStyle={styles.label}
          onPress={() => {
            // navigation.navigate('Tasks');
          }}
          icon={({focused, color, size}) => (
            <MaterialCommunityIcons
              name={'account'}
              size={29}
              color={'#B1BDD1'}
            />
          )}
          activeBackgroundColor={'red'}
          activeTintColor={'red'}
          inactiveBackgroundColor={'white'}
        />
        <DrawerItem
          label="Chats"
          labelStyle={styles.label}
          onPress={() => {
            // navigation.navigate('Chat');
          }}
          icon={({focused, color, size}) => (
            <MaterialCommunityIcons
              name={'chat-processing'}
              size={29}
              color={'#B1BDD1'}
            />
          )}
          activeBackgroundColor={'#8A56AC'}
          activeBackgroundColor={'red'}
          activeTintColor={'red'}
        />
        <DrawerItem
          label="Location"
          labelStyle={styles.label}
          onPress={() => {
            // props.navigation.navigate('Chat');
          }}
          icon={({focused, color, size}) => (
            <Ionicons name={'location'} size={29} color={'#B1BDD1'} />
          )}
          activeBackgroundColor={'#8A56AC'}
          activeBackgroundColor={'red'}
          activeTintColor={'red'}
        />
        <DrawerItem
          label="Settings"
          labelStyle={styles.label}
          onPress={() => {
            // props.navigation.navigate('Chat');
          }}
          icon={({focused, color, size}) => (
            <MaterialIcons name={'settings'} size={29} color={'#B1BDD1'} />
          )}
          activeBackgroundColor={'#8A56AC'}
          activeBackgroundColor={'red'}
          activeTintColor={'red'}
        />
        <DrawerItem
          label="LogOut"
          labelStyle={styles.label}
          style={{marginTop: 130}}
          onPress={() => {
            // props.navigation.navigate('Chat');
          }}
          icon={({focused, color, size}) => (
            <MaterialIcons
              name={'login'}
              size={29}
              color={'#B1BDD1'}
              style={{transform: [{rotateX: '180deg'}, {rotateZ: '180deg'}]}}
            />
          )}
          activeBackgroundColor={'#8A56AC'}
          activeBackgroundColor={'red'}
          activeTintColor={'red'}
        />
      </View>
    </DrawerContentScrollView>
  );
}
export default connect(state=>state,null)(DrawerContent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#6178A0',
    borderTopRightRadius: 15,
    paddingTop: 0,
  },
  drawerContent: {
    flex: 1,
    height: '100%',
  },
  img: {width: 90, height: 90, borderRadius: 10},
  workerName: {color: '#FFFFFF', fontSize: 24, marginTop: 7},
  workerMail: {color: '#FFFFFF', fontSize: 14, marginTop: 7, opacity: 0.65},
  section: {
    // height: 290,
    width: '100%',
    paddingLeft: 20,
    paddingVertical: 61,
    backgroundColor: 'white',
    flex: 1,
  },
  label: {color: '#003971', fontSize: 20, marginLeft: 5},
});
