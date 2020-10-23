import React, {useState, useCallback, useEffect} from 'react';
import {
  GiftedChat,
  Composer,
  Bubble,
  Send,
  Actions,
  MessageImage,
  InputToolbar,
} from 'react-native-gifted-chat';
import {IconButton} from 'react-native-paper';
import {View,Text, StyleSheet, Image, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AudioRecord from 'react-native-audio-record';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MainHeaderCont from '../Components/MainHeaderCont';
// import { Text } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
export default ChatScreen = (props) => {
  
  return (
    <>
      
    </>
  );
};
const styles = StyleSheet.create({
  sendingContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom:30,backgroundColor:'brown'
    marginTop: 11,
    marginRight: 40,
  },
  renderChatFooter: {
    backgroundColor: 'green',
  },
  sendingContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // width:200,
  },
  sendingContainer2: {
    marginLeft: 200,
    position: 'absolute',
    bottom: 300,
  },
  slackImage: {
    borderRadius: 3,
    marginLeft: 0,
    marginRight: 0,
  },
  timer: {fontSize: 30, marginLeft: 15, color: '#003971',fontWeight:'bold'},
time:{
  fontSize: 30, marginLeft: 189, color: '#003971',fontWeight:'bold'
}
});
