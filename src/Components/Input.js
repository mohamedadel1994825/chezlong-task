import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
export default function Input(props) {
  return (
    <TextInput
      {...props}
      style={props.inputStyle}
      underlineColorAndroid={'transparent'}
      blurOnSubmit
      autoCapitalize={'none'}
      autoCorrect={false}
      placeholderTextColor="#4C4E52"
      defaultValue=""
      onChangeText={props.onChangeText}
    />
  );
}

const styles = StyleSheet.create({});
