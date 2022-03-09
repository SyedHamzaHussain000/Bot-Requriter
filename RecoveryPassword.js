import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RecoveryPassword = () => {
    return (
        <ScrollView >
        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
            

                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: wp('90%'), height: hp('13%'), justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#424242', marginTop: 10 }}>Recovery Password</Text>
                    </View>
                </View>



                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: wp('90%'), }}>
                        <Text style={{ fontSize: 15, color: '#424242', marginTop: 5 }}>Reset code was sent to your email. Please enter the code to reset password.</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>

                    <View style={{  flexDirection: 'row', width: wp('80%'), height: hp('30%'), alignItems: "center", justifyContent: 'space-between' }}>


                        <View style={{ height: 50, width: 40, backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 13, width: 13, borderWidth: 1, borderRadius: 100 }} />
                        </View>

                        <View style={{ height: 50, width: 40, backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 13, width: 13, borderWidth: 1, borderRadius: 100 }} />
                        </View>

                        <View style={{ height: 50, width: 40, backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 13, width: 13, borderWidth: 1, borderRadius: 100 }} />
                        </View>

                        <View style={{ height: 50, width: 40, backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 13, width: 13, borderWidth: 1, borderRadius: 100 }} />
                        </View>

                        <View style={{ height: 50, width: 40, backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 13, width: 13, borderWidth: 1, borderRadius: 100 }} />
                        </View>

                        <View style={{ height: 50, width: 40, backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 13, width: 13, borderWidth: 1, borderRadius: 100 }} />
                        </View>

                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'flex-end', }}>
                    <View style={{ height: 60, width: wp('90%'), flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, justifyContent: 'space-between', paddingHorizontal: 10 }}>

                        <TextInput
                            placeholder='New Password'
                            style={{ width: wp('80%'), color: 'black', paddingHorizontal: 20, }}
                            secureTextEntry

                        />
                        <View >
                            <TouchableOpacity>
                                <View style={{ height: 20, width: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>

                                    <Image source={require('../assets/images/seen.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: hp('9%') }}>
                    <View style={{ height: 60, width: wp('90%'), flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, justifyContent: 'space-between', paddingHorizontal: 10 }}>

                        <TextInput
                            placeholder='Confirm New Password'
                            style={{ width: wp('80%'), color: 'black', paddingHorizontal: 20, }}
                            secureTextEntry

                        />
                        <View >
                            <TouchableOpacity>
                                <View style={{ height: 20, width: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                                    <Image source={require('../assets/images/seen.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: wp('90%'), justifyContent: 'flex-end', height: hp('10%') }}>
                        <TouchableOpacity>
                            <View style={{ height: 60, backgroundColor: '#87001D', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>Change Password</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text>
                            Didn't receive a code? <Text onPress={() => { console.log('Resend Code') }} style={{ fontWeight: 'bold' }}>Resend code</Text>
                        </Text>
                    </View>
                </View>







            
        </ImageBackground>
        </ScrollView>
    )
}

export default RecoveryPassword