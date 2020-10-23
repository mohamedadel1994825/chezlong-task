import React from 'react';
import {StyleSheet, Text,View,TouchableOpacity} from 'react-native';
// import {Tooltip, Text} from 'react-native-elements';
import Tooltip from 'react-native-walkthrough-tooltip';
import {Icon} from 'react-native-elements';
import {sizes} from '../consts/sizes';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default function TooltipComp(props) {
  return (
    <Tooltip
      isVisible={props.isVisible}
      backgroundColor={'transparent'}
      content={
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // backgroundColor: '#3E3E3F'
          }}>
          <Text style={{fontSize: 15, color: '#EAEBEB'}}>
            let chezlong helop you
          </Text>
          <TouchableOpacity
          onPress={props.onCancelPress}
            style={{ paddingHorizontal:2}}>
            <Icon
              name="cross"
              type="entypo"
              color="#EAEBEB"
              style={{marginBottom: 20}}
            />
          </TouchableOpacity>
        </View>
      }
      placement="bottom"
      onClose={props.onToolTipClose}
      contentStyle={{width: sizes.Width * 0.6, backgroundColor: '#3E3E3F'}}>
      <TouchableHighlight />
    </Tooltip>
  );
}

const styles = StyleSheet.create({});
