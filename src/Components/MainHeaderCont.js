import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import  MainHeader from './MainHeader';

export default function MainHeaderCont(props) {
  return (
    <View style={styles.container}>
      <MainHeader {...props} navigation={props.navigation} />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
});
