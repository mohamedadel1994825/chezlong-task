import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const SettingsScreen=()=> {
    return (
        <View style={styles.container}>
          <View style={styles.headerStyle}>
          <Text style={styles.TextStyle}>Settings</Text>
          </View>
          <View>
          <Text style={styles.MainTextStyle}>Settings Screen</Text>
          </View>
        </View>
      );
}


export default SettingsScreen


const styles = StyleSheet.create({
container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
},
headerStyle:{
    height:45,
    backgroundColor:'green',
    width:'100%',
    marginTop:25
},
TextStyle:{
    fontSize:16,
    textAlign:'center',
    marginTop:10,
    color:'#fff'
},
MainTextStyle:{
    fontSize:16,
    color:'#F00',
    marginTop:220
}
  });