// App.js

import React, { useState, useEffect } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Permission,
} from "react-native";
import Modal from "react-native-modal";
// // import { getPreciseDistance } from "geolib";
// import * as Permissions from "expo-permissions";
// import { MainHeaderCont, ProfileImage } from "../components";
// import PunchCard from "../components/PunchCard";
// import WorkHomeBtnCont from "../components/WorkHomeBtnCont";
// import PunchBtnsCont from "../components/PunchBtnsCont";
// import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as Location from "expo-location";
// import {
//   setPunchIn,
//   setPunchOut,
//   setPunchOutAfter,
//   setInWork,
//   setInHome,
// } from "../redux";
// import moment from "moment";
const HomeScreen = (props) => {
  const [alert, setAlert] = React.useState(false);
  const [location1, setLocation1] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [punchDate, setpunchDate] = React.useState(null);
  const [alertConfirmed, setAlertConfirmed] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);
  // let { navigation } = props;
  // let {
  //   punchInDate,
  //   punchOutDate,
  //   isPunchedIn,
  //   isPunchedOut,
  // } = props.PunchInOut;
  // let { inWork, inHome } = props.InWorkInHome;
  // let {
  //   setPunchIn,
  //   setPunchOut,
  //   setPunchOutAfter,
  //   setInWork,
  //   setInHome,
  // } = props;
  // const [location, setLocation] = React.useState({
  //   latitude: 25.160885,
  //   longitude: 55.403883,
  // });
  // const [distance, setDistance] = React.useState(200);
  // const getLocationAsync = async () => {
  //   try {
  //     let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //     if (status !== "granted") {
  //       alert("Permission to access location was denied");
  //       return false;
  //     }
  //     let loc = await Location.getCurrentPositionAsync({
  //       accuracy: Location.Accuracy.Highest,
  //     });
  //     if (loc) {
  //       return loc;
  //     }
  //   } catch (error) {}
  // };
  // const findCoordinates = async (clientLocation) => {
  //   try {
  //     let loc = await getLocationAsync();
  //     console.log("loccc", loc);
  //     if (loc&&inWork) {
  //       const { latitude, longitude } = loc.coords;
  //       console.log("locccyes", loc);
  //       let res1 = getPreciseDistance(
  //         {
  //           latitude,
  //           longitude,
  //         },
  //         clientLocation
  //       );
  //       console.log("distance", res1);
  //       if (res1 < 100) {
  //         setAlert(true)
  //       } else {
  //         setDistance(200);
  //         setAlert(false)
  //         Alert.alert("punsh from work ");
  //       }
  //     }
  //     else if(inHome){
  //       setAlert(true)
  //     }
  //   } catch (error) {}
  // };
  // const findCoordinatesPunchIn = async (clientLocation) => {
  //   try {
  //     let loc = await getLocationAsync();
  //     console.log("loccc", loc);
  //     if (loc&&inWork) {
  //       const { latitude, longitude } = loc.coords;
  //       console.log("locccyes", loc);
  //       let res1 = getPreciseDistance(
  //         {
  //           latitude,
  //           longitude,
  //         },
  //         clientLocation
  //       );
  //       if (res1 < 100) {
  //         let date=new Date()
  //         setPunchIn(date);
  //         console.log("punchInDate", punchInDate);
  //         console.log("ispunchedin", isPunchedIn);
  //         setDistance(200);
  //       } else {
  //         setDistance(200);
  //         setAlert(false)
  //         Alert.alert("punsh from work ");
  //       }
  //       console.log("distance", res1);
  //     }
  //     else if(inHome){
  //       let date=new Date()
  //       setPunchIn(date);
  //     }
  //   } catch (error) {}
  // };
  // const findCoordinatesInWork = async (clientLocation) => {
  //   try {
  //     let loc = await getLocationAsync();
  //     console.log("loccc", loc);
  //     if (loc) {
  //       const { latitude, longitude } = loc.coords;
  //       console.log("locccyes", loc);
  //       let res1 = getPreciseDistance(
  //         {
  //           latitude,
  //           longitude,
  //         },
  //         clientLocation
  //       );
  //       console.log("distance", res1);
  //       if (res1 < 100) {
  //         setInWork();
  //         setDistance(200);
  //       } else {
  //         setDistance(200);
  //         setAlert(false);
  //         Alert.alert("punsh from work ");
  //       }
  //     }
  //   } catch (error) {}
  // };
  // const punchIn = () => {
  //   findCoordinatesPunchIn(location);
  // };
  // const punchOut = () => {
  //   findCoordinates(location);
  //   console.log("punchOutDate", punchOutDate);
  // };
  // const onInWorkPress = () => {
  //   findCoordinatesInWork(location);
  // };
  // const onInHomePress = () => {
  //   setInHome();
  // };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <MainHeaderCont navigation={navigation} />
        <ProfileImage profImg={require("../assets/img/person-male.png")} />
        <View>
          <Text style={styles.attendance}>Time & Attendance</Text>
        </View>
        <View
          style={{
            backgroundColor: "#F8F8F8",
            flexDirection: "row",
            marginHorizontal: 20,
            justifyContent: "space-between",
            shadowColor: "#00000F",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.2,
            shadowRadius: 6,
            elevation: 7,
            zIndex: 100,
            marginTop: 10,
          }}
        >
          <PunchCard punchInDate={punchInDate}
          isPunchedIn={isPunchedIn} 
          isPunchedOut={isPunchedOut}
          punshedIn
          />
          <PunchCard
           punchOutDate={punchOutDate}
           isPunchedOut={isPunchedOut} />
        </View>
        <View>
          <Text style={styles.question}>Are You Working From</Text>
        </View>
        <WorkHomeBtnCont
          onInWorkPress={onInWorkPress}
          onInHomePress={onInHomePress}
          inWork={inWork}
          inHome={inHome}
        />
        <PunchBtnsCont
          punchIn={punchIn}
          punchOut={punchOut}
          isPunchedIn={isPunchedIn}
          isPunchedOut={isPunchedOut}
          setPunchOutAfter={() => setPunchOutAfter()}
          punchOutDate={punchOutDate}
        />
        <View style={{ marginBottom: 120 }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 73,
              paddingVertical: 15,
              backgroundColor: "#6FD0D3",
              borderRadius: 10,
              marginHorizontal: 20,
              marginTop: 30,
            }}
          >
            <Text style={styles.txtRta}>myRTA services</Text>
          </TouchableOpacity>
          <View style={styles.chatCont}>
            <AntDesign name="wechat" size={50} color="white" />
          </View>
        </View>
        <Modal
          useNativeDriver
          hideModalContentWhileAnimating
          isVisible={alert}
          onBackButtonPress={() => {
            setAlert(false);
          }}
          onBackdropPress={() => {
            setAlert(false);
          }}
          animationIn={"fadeIn"}
          animationOut={"fadeOut"}
          backdropOpacity={0.7}
        >
          <View style={styles.alert}>
            <Text style={styles.confirm}>{"Confirmation"}</Text>
            <View
              style={{
                borderBottomColor: "#DDDDDD",
                borderBottomWidth: 1.5,
                height: 1,
              }}
            ></View>
            <Text style={styles.ask}>
              {"Are you sure you want to push out ?"}
            </Text>
            <View
              style={{
                borderBottomColor: "#DDDDDD",
                borderBottomWidth: 1.5,
                height: 1,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{ ...styles.completeButton, backgroundColor: "#387BB4" }}
                onPress={() => {
                  setAlert(false);
                  setPunchOut(new Date());
                  console.log("dis2", punchOutDate);
                  let date = moment(new Date()).format("L h:mm:ss a");
                  setpunchDate(date);
                  setAlertConfirmed(true);
                }}
                activeOpacity={0.7}
              >
                <Text style={styles.completeText}>{"Yes"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.completeButton,
                  marginRight: 20,
                  paddingHorizontal: 18,
                  backgroundColor: "#DDDDDD",
                }}
                onPress={() => {
                  setAlert(false);
                  setConfirmed(false);
                }}
                activeOpacity={0.7}
              >
                <Text style={{ ...styles.completeText, color: "#323232" }}>
                  {"No"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          useNativeDriver
          hideModalContentWhileAnimating
          isVisible={alertConfirmed}
          onBackButtonPress={() => {
            setAlertConfirmed(false);
            setConfirmed(false);
          }}
          onBackdropPress={() => {
            setAlertConfirmed(false);
            setConfirmed(false);
          }}
          animationIn={"fadeIn"}
          animationOut={"fadeOut"}
          backdropOpacity={0.7}
        >
          <View style={styles.alert}>
            <Text style={styles.confirm}>{"Information"}</Text>
            <View
              style={{
                borderBottomColor: "#DDDDDD",
                borderBottomWidth: 1.5,
                height: 1,
              }}
            ></View>
            <Text style={styles.inform}>
              {`You have successfully Punched Out from Home at ${punchDate}`}
            </Text>
            <View
              style={{
                borderBottomColor: "#DDDDDD",
                borderBottomWidth: 1.5,
                height: 1,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingHorizontal: 20,
              }}
            >
              <TouchableOpacity
                style={{ ...styles.completeButton, backgroundColor: "#387BB4" }}
                onPress={() => {
                  setAlertConfirmed(false);
                }}
                activeOpacity={0.7}
              >
                <Text style={styles.completeText}>{"Ok"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}
      </ScrollView>
    </View>
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPunchIn,
      setPunchOut,
      setPunchOutAfter,
      setInWork,
      setInHome,
    },
    dispatch
  );
export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  attendance: {
    fontSize: 25,
    color: "#19238C",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  question: {
    fontSize: 22,
    color: "#000000",
    textAlign: "center",
    marginTop: 30,
  },
  txtRta: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
  },
  txtHome: {
    fontSize: 17,
    color: "#19238C",
    marginLeft: 10,
    fontWeight: "bold",
  },
  chatCont: {
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "#1CB1B7",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    marginTop: 77,
    marginLeft: 20,
  },
  alert: {
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
  },
  confirm: {
    paddingHorizontal: 20,
    color: "#717173",
    fontSize: 25,
    textAlign: "left",
    marginBottom: 15,
  },
  ask: {
    paddingHorizontal: 20,
    color: "#717173",
    fontSize: 17,
    textAlign: "left",
    marginVertical: 20,
  },
  inform: {
    paddingHorizontal: 20,
    color: "#717173",
    fontSize: 18,
    textAlign: "left",
    marginVertical: 10,
  },
  warningTitle: {
    color: "#EBA708",
    fontSize: 39,
    marginTop: 15,
    textAlign: "center",
  },
  warningText: {
    color: "#7C8085",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
  },
  completeButton: {
    marginTop: 15,
    backgroundColor: "#69AABC",
    borderRadius: 5,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginLeft: 15,
  },
  completeText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  closeButtonIcon: {
    color: "#FFFFFF",
    fontSize: 24,
    position: "absolute",
    top: -40,
    right: 0,
    padding: 4,
  },
});
