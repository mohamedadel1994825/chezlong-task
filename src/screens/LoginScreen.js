import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useForm, Controller} from 'react-hook-form';
import * as Animatable from 'react-native-animatable';
import {Icon} from 'react-native-elements';
import Input from '../Components/Input';
import {loginUser} from '../redux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const LoginScreen = (props) => {
  const [isSelected, setSelected] = useState(false);
  const {control, handleSubmit, errors, reset, getValues, watch} = useForm();
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  let emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  let passwordRegx = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/i;

  const updataSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const signIn = () => {
    props.loginUser();
    reset({
      email: '',
      password: '',
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/shutterstock.png')}
        style={styles.shutterstockimage}>
        <View style={styles.header}>
          {/* <Text style={styles.text_contra}>CONTRA</Text>
          <Text style={styles.text_base}>Base</Text> */}
          <Image
            source={require('../assets/ContraBase-logo.png')}
            style={styles.logo}
            resizeMode={'contain'}
          />
        </View>
        <StatusBar barStyle="light-content" />
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.footer_text}>Sign In</Text>
          <View style={styles.nameCont}>
            {/* <FontAwesome name="user-o" size={24} color="#05375a" /> */}
            {/* <MaterialCommunityIcons name="account" size={28} color={'#6178A0'} /> */}
            <Icon name="user" type="font-awesome" color="#6178A0" />
            <Controller
              render={({onChange, onBlur, value}) => (
                <Input
                  placeholder="User Name / Mobile Number"
                  inputStyle={styles.textInput}
                  keyboardType="email-address"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              control={control}
              name="email"
              rules={{
                required: true,
                pattern: {
                  value: emailRegx,
                },
              }}
              defaultValue=""
            />
          </View>
          {errors.email && (
            <Text style={styles.errorText}>
              invalid username or mobile number
            </Text>
          )}

          <View style={styles.passwordCont}>
            {/* <Feather name="lock" size={24} color="#05375a" /> */}
            <Icon name="lock" type="feather" color="#6178A0" size={20} />
            <Controller
              render={({onChange, onBlur, value}) => (
                <Input
                  placeholder="Password"
                  inputStyle={styles.password}
                  secureTextEntry={data.secureTextEntry ? true : false}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              control={control}
              name="password"
              rules={{
                required: true,
                pattern: {
                  value: passwordRegx,
                },
              }}
              defaultValue=""
            />
            <TouchableOpacity
              onPress={updataSecureTextEntry}
              style={styles.passIconTxtCont}>
              {data.secureTextEntry ? (
                <Icon
                  name="eye"
                  size={24}
                  type="font-awesome"
                  color="#6178A0"
                  style={{marginRight: 5}}
                />
              ) : (
                <Icon
                  name="eye-slash"
                  size={24}
                  type="font-awesome"
                  color="#6178A0"
                />
              )}
              <Text style={styles.show}>Show</Text>
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={styles.errorText}>
              invalid Password should contain numbers and characters
            </Text>
          )}

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={handleSubmit(signIn)}>
              <Text style={styles.textSign}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.options}>
            <TouchableOpacity
              onPress={() => {
                setSelected((isSelected) => !isSelected);
              }}
              style={styles.rememberme}>
              <View>
                <Text style={styles.rememberText}>Remember Me</Text>
              </View>
              <CheckBox
                value={isSelected}
                onValueChange={setSelected}
                tintColors={{false: 'white'}}
                // style={{height: 15, width: 15}}
              />
            </TouchableOpacity>
            <View>
              <TouchableOpacity style={styles.forget}>
                <Text style={styles.forget}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loginUser,
    },
    dispatch,
  );
export default connect((state) => state, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shutterstockimage: {
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  logo: {width: '90%', height: '50%'},
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 73,
    marginBottom: 41,
    height: 100,
  },
  text_contra: {
    color: '#003971',
    textShadowColor: '#0000007C',
    textShadowRadius: 10,
    fontSize: 50,
    fontWeight: 'bold',
  },
  text_base: {
    color: '#5773FF',
    textShadowColor: '#0000007C',
    textShadowRadius: 10,
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
  },
  footer: {
    backgroundColor: '#B1BDD1',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    opacity: 0.1,
    width: '90%',
    elevation: 5,
  },
  footer_text: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    marginBottom: 23,
    fontSize: 26,
  },
  nameCont: {
    flexDirection: 'row',
    borderRadius: 11,
    backgroundColor: '#fff',
    marginBottom: 29,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    marginRight: 20,
    marginLeft: 10,
    color: '#6178A0',
    fontSize: 15,
    paddingVertical: 14,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  secureicon: {
    flexDirection: 'row',
    marginVertical: 11,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
  },

  button: {
    alignItems: 'center',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5773FF',
    borderRadius: 11,
    paddingHorizontal: 14,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  options: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  rememberme: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    color: '#fff',
    fontSize: 14,
  },
  checkbox: {
    color: '#fff',
  },
  forget: {
    color: '#fff',
    fontSize: 14,
  },
  show: {
    color: '#6178A0',
  },
  password: {
    marginLeft: 10,
    color: '#6178A0',
    fontSize: 15,
    paddingVertical: 14,
    width: '70%',
  },
  passIconTxtCont: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    width: '21%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  passwordCont: {
    flexDirection: 'row',
    borderRadius: 11,
    backgroundColor: '#fff',
    marginBottom: 29,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
