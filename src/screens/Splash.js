import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Splash(props) {
  let {navigation} = props;
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 10);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ContraBase-logo.png')}
        style={styles.img}
        resizeMode={'contain'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  img: {width: '90%', height: '100%', overflow: 'hidden'},
});
