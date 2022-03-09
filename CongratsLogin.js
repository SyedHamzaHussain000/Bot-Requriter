import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CongratsLogin = () => {
    return (
        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
            <ScrollView >

                <View style={{ height: hp('50%'), width: wp('100%'), alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Image style={{ height: 250, width: 250 }} source={require('../assets/images/congo.png')} resizeMode={'contain'} />
                </View>

                <View style={{ alignItems: 'center', }}>
                    <View style={{ height: hp('10%'), width: wp('90%'), alignItems:'center', justifyContent:'flex-end' }}>
                        <Text style={{fontSize:25}}>Congrats!!</Text>
                    </View>

                    <View style={{  width: wp('70%'),alignItems:'center', justifyContent:'flex-end', marginTop:5 }}>
                        <Text style={{fontSize:15}}>You have successfully change password Please use new password while login.</Text>
                    </View>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: wp('90%'), justifyContent: 'flex-end', height: hp('13%') }}>
                        <TouchableOpacity>
                            <View style={{ height: 60, backgroundColor: '#87001D', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>Login Now</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



            </ScrollView>
        </ImageBackground>
    )
}

export default CongratsLogin