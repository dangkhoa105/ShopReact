import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground, ScrollView } from 'react-native';
import ViewPager from '@react-native-community/viewpager';  
import { connect } from 'react-redux';

import Swiper from 'react-native-swiper';
import ElevatedView from 'react-native-elevated-view'
import colors from '../../../../Design/Color';

class Sideproduct extends Component {
  render() {
    const {arrType} = this.props;
    const { banner, bannerText, text, bannerImage, image, titleText, stayElavated } = styles
    return (
      <View margin={10}>
        <ElevatedView elevation={5} style={stayElavated}>
          <View style={banner}>
            <View style={bannerText}>
              <Text style ={text}>LIST OF CATEGORY</Text>
            </View>
            <View style = {bannerImage}>
              <ScrollView>
                {arrType.map((e) => ( //hàm map có ý nghĩa là từ 1 cái mảng về 1 cái mảng khác (biến mảng từ đối tượng types sang mảng của View)
                  //có 4 phần tử thì sẽ render về 4 cái 
                  <View key={e.id}>
                    <TouchableOpacity ref={'Midi'} onPress={()=>this.props.goProduct(e)} key={e.id} >{/* dùng để gán tên cho TouchableOpacity */}
                      <ImageBackground
                        style={image}
                        source={{ uri: `http://localhost:5000/app/images/type/${e.image}` }}
                      >
                        <Text style={titleText}>{e.name}</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ElevatedView>    
      </View>     
    );
  }
}

function mapStoreToMap(state) {
  return{
    arrType: state.arrType,
  }
}

export default connect(mapStoreToMap)(Sideproduct);
var {width, height} = Dimensions.get('window');
const imageWidth= width;
const imageHeight= (imageWidth / 933) * 456;
const styles = StyleSheet.create({
    banner: {
      height: height * 0.35,
      backgroundColor: colors.slideUI,
      justifyContent: 'space-around',
    },
    bannerText: {
      flex: 0.7,
      backgroundColor: colors.slideUI,
      margin: 10,
      marginBottom: 0
    },
    text: {
      color: colors.paleblue,
      fontSize: 18,
    },
    bannerImage: {
      flex: 4,
      marginTop: 0,
      margin: 10,
    },
    titleText: {
      fontSize: 18,
      color: colors.darkgrayishblue,
    },
    image: {
      width: imageWidth,
      height: imageHeight,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 0,
    },
    stayElavated: {
      backgroundColor: colors.white,
    },
})