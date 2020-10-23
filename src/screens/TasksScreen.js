import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import Icon from 'react-native-vector-icons/Feather';
import {Icon} from 'react-native-elements';
import MainHeaderCont from '../Components/MainHeaderCont';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {bindActionCreators} from 'redux';
import {setRoute} from '../redux';
import {connect} from 'react-redux';
import {color} from 'react-native-reanimated';
import IconTextDrawer from '../Components/IconTextDrawer';
import Input from '../Components/Input';
import TooltipComp from '../Components/TooltipComp';
import {CardComp} from '../Components/CardComp';
import {searchTherapist,getProfileData} from '../redux'
import { reactotron } from '../redux/store/ReactotronConfig';
const TasksScreen = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  React.useEffect(() => {
    props.getProfileData()
  }, []);
  const onChangeText=async(text)=>{
     props.searchTherapist(text)
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#3CA9C2'} />
      <View
        style={{
          width: '100%',
          backgroundColor: '#3CA9C2',
          borderColor: '#3CA9C2',
          borderBottomLeftRadius: 45,
          borderBottomRightRadius: 45,
          paddingHorizontal: 20,
          borderTopColor: '#3CA9C2',
          paddingTop: 20,
          paddingBottom: 60,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text 
          numberOfLines={1}
          style={{fontSize: 23, color: 'white',width:'70%'}}>
      Hello,<Text> {props.doctor?.profileData?.nameEn}</Text>
          </Text>
          <IconTextDrawer
          MaterialComm1 icon={'information'} txt={'Help'} />
        </View>
        <Text style={{color: '#4C4E52', fontSize: 16}}>
          How are you doing today?
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          top: 100,
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            alignItems: 'center',
            width: '70%',
            borderRadius: 5,
            borderColor: '#4C4E52',
            backgroundColor: 'white',
          }}>
          <MaterialIcons
            name="search"
            size={25}
            color="#4C4E52"
            // style={styles.iconRow}
          />
          <Input
            inputStyle={styles.inputStyle}
            placeholder={'Serach therapist by name...'}
            onChangeText={onChangeText}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            alignItems: 'center',
            // width: '80%',
            borderRadius: 5,
            borderColor: '#4C4E52',
            // borderWidth:1
            backgroundColor: 'white',
            justifyContent: 'center',
            paddingVertical: 11,
          }}>
          <Text style={{fontSize: 15, color: '#4C4E52', marginRight: 5}}>
            Sort by
          </Text>
          <Icon name="sort" type="font-awesome-5" color="#4C4E52" />
        </TouchableOpacity>
      </View>
      <View style={styles.tipCont}>
        <View style={styles.imgCont}>
          <View style={styles.imgContChild}>
            <Image
              source={require('../assets/dragon.png')}
              style={styles.img}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <Text style={styles.txxTip}>
          Don't know how to choose the right therapist?
        </Text>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(true);
          }}>
          <Text style={styles.clickText}>click</Text>
        </TouchableOpacity>
      </View>
      <TooltipComp
        isVisible={isVisible}
        onCancelPress={() => {
          setIsVisible(false);
        }}
        onToolTipClose={() => {
          setIsVisible(false);
        }}
      />
      <FlatList
        data={props.doctor.searchData}
        renderItem={({item}) => <CardComp data={item} />}
        keyExtractor={(item) => item + ''}
        contentContainerStyle={{marginTop: 10, paddingBottom:30}}
        style={{height: '80%'}}
      />
      <TouchableOpacity
      activeOpacity={.7}
       style={styles.bottle}>
      <Icon name="glass" type="font-awesome" color="white" />
      </TouchableOpacity>
    </View>
  );
};
const mapDisaptchToProps = (dispatch) =>
  bindActionCreators(
    {
      setRoute,
      searchTherapist,
      getProfileData
    },
    dispatch,
  );
export default connect((state) => state, mapDisaptchToProps)(TasksScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455B631A',
    flex: 1,
  },
  tipCont: {
    backgroundColor: '#EBEBEB',
    flexDirection: 'row',
    // paddingHorizontal: 25,
    marginTop: 30,
    marginHorizontal: 20,
    borderColor: '#3CA8C1',
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 3,
  },
  tasksTxt: {fontSize: 30, marginLeft: 15, color: '#454F63'},
  inputStyle: {
    backgroundColor: 'white',
    width: '82%',
  },
  txxTip: {
    fontSize: 13,
    color: '#4C4E52',
  },
  clickText: {
    fontSize: 13,
    color: '#3CA8C1',
    textDecorationLine: 'underline',
  },
  imgCont: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3CA8C1',
    backgroundColor: '#DFE6E8',
  },
  imgContChild: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#3CA8C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 30,
    tintColor: '#DFE6E8',
  },
  bottle:{
    position:'absolute',
    backgroundColor:'#F57F55',
    padding:12,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    bottom:25,right:20
  }
});
