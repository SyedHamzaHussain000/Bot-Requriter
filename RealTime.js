import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const RealTime = ({navigation}) => {
    return (
        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
            <View style={{ height: hp('50%'), alignItems: 'center', justifyContent: 'flex-end' }}>
                <Image source={require('../assets/images/realtime.png')} style={{ height: 250, width: 250 }} resizeMode={'contain'} />
            </View>

            <View style={{ height: hp('10%'), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'brown' }}>Real-time</Text>
            </View>


            <View style={{ width: wp('65%'), height: hp('10%'), alignSelf: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#929292' }}>Lorem ipsum dolor  sit dim amet, jsn sad kdadjiwjd dwid a.</Text>
            </View>

            <TouchableOpacity>
                <View style={{ height: hp('10%'), alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: wp('90%'), backgroundColor: '#87001D', height: 60, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Learn more</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{ width: wp('90%'), alignSelf: 'center', height: hp('10%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'center',  }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, color: '#929292' }}>SKIP</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: 15, height: 15, backgroundColor: '#C3C3C3', borderRadius: 100, alignSelf: 'center', justifyContent: 'center', marginLeft: 20 }} />
                <View style={{ width: 15, height: 15, backgroundColor: '#C3C3C3', borderRadius: 100, alignSelf: 'center', justifyContent: 'center', marginLeft: 10 }} />
                <View style={{ width: 15, height: 15, backgroundColor: '#C3C3C3', borderRadius: 100, alignSelf: 'center', justifyContent: 'center', marginLeft: 10 }} />
                <View style={{ width: 15, height: 15, backgroundColor: '#C3C3C3', borderRadius: 100, alignSelf: 'center', justifyContent: 'center', marginLeft: 10 }} />
                <View style={{ width: 15, height: 15, backgroundColor: '#C3C3C3', borderRadius: 100, alignSelf: 'center', justifyContent: 'center', marginLeft: 10 }} />
                <View style={{ width: 15, height: 15, backgroundColor: 'brown', borderRadius: 100, alignSelf: 'center', justifyContent: 'center', marginLeft: 10 }} />

                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('MyTabs')}}>
                        <Text style={{ fontSize: 20, color: 'brown' }}>NEXT</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
}

export default RealTime