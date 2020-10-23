import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const IconTextDrawer = (props) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...props.style}}
      onPress={() => {
        // props.navigation.navigate(props.navScreen);
      }}>
      {props.MaterialComm1 && (
        <MaterialCommunityIcons
          name={`${props.icon}`}
          size={27}
          color={'#4C4E52'}
        />
      )}
      {props.MaterialComm2 && (
        <MaterialCommunityIcons
          name={`${props.icon}`}
          size={32}
          color={'#B1BDD1'}
        />
      )}
      {props.Ionicons && (
        <Ionicons name={`${props.icon}`} size={32} color={'#B1BDD1'} />
      )}
      {props.Feather && (
        <Feather name={`${props.icon}`} size={32} color={'#B1BDD1'} />
      )}
      {props.MaterialIcons && (
        <MaterialIcons
          name={`${props.icon}`}
          size={32}
          color={'#B1BDD1'}
          style={{transform: [{rotateX: '180deg'}, {rotateZ: '180deg'}]}}
        />
      )}
      <Text style={styles.txt}>{props.txt}</Text>
    </TouchableOpacity>
  );
};

export default IconTextDrawer;

const styles = StyleSheet.create({
  container: {flexDirection: 'row',},
  txt: {color: '#4C4E52', fontSize: 21, marginLeft: 5},
});
