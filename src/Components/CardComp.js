import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';
import {Icon} from 'react-native-elements';
import IconTextDrawer from './IconTextDrawer';
export function CardComp(props) {
  let {data} = props;
  return (
    <View style={styles.card}>
      <View style={styles.imgTxtCont}>
        <View style={styles.imgCont}>
          <Image
            source={{uri:data.profilePicFile}}
            style={styles.img}
            // resizeMode={'contain'}
          />
        </View>
        <View>
          <Text style={styles.name}>{data.nameEn}</Text>
          <Text style={styles.spetialize}>
            Specialized in :
  <Text style={styles.field}>{data.mainSpec1En}</Text>
          </Text>
          <View style={styles.startxtCont}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={3}
              selectedStar={(rating) => {}}
              fullStarColor={'#FFC212'}
              emptyStarColor={'#5A5A5C'}
              starSize={16}
              containerStyle={{
                justifyContent: 'center',
              }}
              starStyle={{marginLeft: 5}}
            />
            <Text style={styles.rev}>({data.reviewsCount} Rev)</Text>
            <MaterialIcons
              name="play-arrow"
              size={24}
              color="#3CA8C1"
              style={styles.iconRow}
            />
            <Text style={styles.sessNumber}>
            {data.finishedSessionsCount}<Text style={styles.rev}>Sessions</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bookCont}>
        {/* <IconTextDrawer MaterialComm1 icon={'information'} txt={'Help'} /> */}
        <Icon name="money-bill" type="font-awesome-5" color="#3AB64A" />
        <Text style={styles.EGP}>
            EGP<Text style={styles.sessNumber}>{data.fees.video30}</Text>
        </Text>
        <TouchableOpacity style={styles.book}>
          <Text style={styles.textSign}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 5,
    marginHorizontal: 20,
    elevation: 5,
    paddingHorizontal: 5,
  },
  rowContent: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  iconRow: {
    marginLeft: 8,
  },
  name: {
    color: '#F57F55',
    fontSize: 16,
    marginLeft: 5,
  },
  bookCont: {
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor:'red',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  book: {
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3CA8C1',
    borderRadius: 5,
    elevation: 5,
    marginTop: 4,
    paddingVertical: 7,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  imgTxtCont: {
    flexDirection: 'row',
  },
  imgCont: {},
  img: {
    width: 36,
    height: 36,
    borderRadius: 20,
  },
  spetialize: {
    color: '#3E3E3F',
    fontSize: 16,
    marginLeft: 5,
    marginTop: 4,
  },
  field: {
    color: '#858585',
    fontSize: 16,
  },
  startxtCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rev: {
    fontSize: 15,
    color: '#858585',
    marginLeft: 3,
  },
  sessNumber: {
    color: '#3E3E3F',
    fontSize: 16,
  },
  EGP: {
    fontSize: 15,
    color: '#858585',
  },
});
