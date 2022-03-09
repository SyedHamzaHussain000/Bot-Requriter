import { View, Text, ImageBackground, Image, Dimensions, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const VideoCall = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#AFAFAF' }}>
            <View style={{ height: 60 }} />
            <View style={{ height: hp('70%') }}>
                <ImageBackground source={require('../assets/images/video.png')} style={{ height: 700, width: wp('100%'), alignItems:'flex-end' }} resizeMode={'contain'} >
                    <Image source={require('../assets/images/caller.png')} style={{height:200, width:200, marginTop:50}} resizeMode={'contain'}/>
                </ImageBackground>
            </View>


            <View style={{ height:hp('10%'),  width:wp('80%'), alignSelf:'center', justifyContent:'space-between', flexDirection:'row', alignItems:'center' }}>
                <View style={{height:50, width:50, backgroundColor:'white', borderRadius:100, alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../assets/images/cam.png')} style={{height:30, width:30}} resizeMode={'contain'}/>
                </View>

                <View style={{height:50, width:50, backgroundColor:'white', borderRadius:100, alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../assets/images/micro.png')} style={{height:30, width:30}} resizeMode={'contain'}/>
                </View>

                <View style={{height:50, width:50, backgroundColor:'white', borderRadius:100, alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../assets/images/msgcall.png')} style={{height:30, width:30}} resizeMode={'contain'}/>
                </View>

                <View style={{height:50, width:50, backgroundColor:'#AA3E3E', borderRadius:100, alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../assets/images/cut.png')} style={{height:30, width:30}} resizeMode={'contain'}/>
                </View>

                
            </View>
        </View>
    )
}

export default VideoCall