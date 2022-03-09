import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const call = () => {
    return (
        <View style={{justifyContent:'space-between', flex:1}}>
            <View>
                <View style={{ height: hp('40%'),  alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{ height: 200, width: 200, borderRadius: 500, backgroundColor: 'pink' }}>
                        <Image source={require('../assets/images/callimg.png')} style={{ height: 200, width: 200 }} resizeMode={'contain'} />
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: '400' }}>Username</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18 }}>
                        00:52
                    </Text>
                </View>
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

export default call