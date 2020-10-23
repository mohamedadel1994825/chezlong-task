import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Animatable.Text style={styles.TextStyle} animation="lightSpeedIn" iterationCount={3}>Details SCreen</Animatable.Text>
    </View>
  );
}

export default Settings


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle:{
    fontSize:18,
    fontWeight:'bold',
    color:'#ff4d88'
  }
});