import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  I18nManager,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {sizes} from '../consts/sizes';
const MainHeader = (props) => {
  // const { navigate } = useNavigation()
  return (
    <View style={styles.container}
    >
      <View style={[styles.content]}>
        <TouchableOpacity
            onPress={()=>props.navigation.goBack()}
            activeOpacity={.7}
        style={styles.logoCont}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={'#454F63'}
          />
        </TouchableOpacity>
        <View style={styles.iconimgCont}>
          <TouchableOpacity onPress={() => {}} style={{marginRight: 15}}>
            <MaterialCommunityIcons
              name="chat-processing"
              size={30}
              color={'#454F63'}
            />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#3ACCE1',
                position: 'absolute',
                right: -6,
                top: -7,
                borderRadius: 15,
                shadowColor: '#3ACCE140',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{marginRight: 15}}>
            <MaterialIcons
              name="notifications-none"
              size={30}
              color={'#454F63'}
            />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: '#C840E9',
                position: 'absolute',
                right: -2,
                top: -7,
                borderRadius: 15,
                shadowColor: '#C840E940',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>5</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
  content: {
    marginHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 128.82,
    height: 26,
    resizeMode: 'cover',
  },
  iconimgCont: {
    height: 60,
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    marginLeft: 40.2,
  },
  title: {
    fontSize: 20,
    color: 'green',
    width: sizes.Width * 0.65,
  },
  profimgCont: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profImg: {
    height: '95%',
    width: '95%',
    resizeMode: 'cover',
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  isActive: {
    width: 5,
    height: 5,
    backgroundColor: '#3AC13E',
    borderColor: '#69AABC',
    borderWidth: 1,
    elevation: 1,
    position: 'absolute',
    bottom: 3,
    right: 1,
    borderRadius: 5,
  },
});

export default connect((state) => state, null)(MainHeader);
