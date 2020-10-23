import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";
import { sizes } from "../consts/sizes";
const ProfileImage = (props) => {
  return (
    <View onPress={props.onPress} style={styles.profimgCont}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Image
        style={styles.profImg}
        source={props.profImg}
        resizeMode={"cover"}
      />
      <Text style={styles.name}>Kafaat Tarek Talaat Rahmo mohamed ali</Text>
      </View>
      
      <TouchableOpacity onPress={() => {}}
      >
        <Feather name="power" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  profimgCont: {
    backgroundColor: "#19238C",
    width: sizes.Width,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent:'space-between',
    paddingVertical:20
  },
  profImg: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 75,
    tintColor: "#1A7CB3",
  },
  camera: {
    fontSize: 30,
    color: "#FFFFFF",
    opacity: 0.62,
  },
  name: {
    fontSize: 20,
    color: "#FFFFFF",
    marginLeft: 15,
    width:sizes.Width*.55
  },
});

export default ProfileImage;
