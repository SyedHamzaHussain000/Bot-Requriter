import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WelcomeToBot = ({navigation}) => {
    return (
        <ScrollView >
        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
            

                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: wp('90%'), height: hp('13%'), justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#424242', marginTop: 10 }}>Welcome To BOTrecruiter</Text>
                    </View>
                </View>



                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: wp('90%'), }}>
                        <Text style={{ fontSize: 15, color: '#424242', marginTop: 5, width: wp('80%') }}>Choose a convinenient way to register or login to the app.</Text>
                    </View>
                </View>


                <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: hp('20%'), }}>
                    <View style={{ height: 60, width: wp('90%'), flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, justifyContent: 'space-between', paddingHorizontal: 10 }}>

                        <TextInput placeholder='johndoe@gmail.com' style={{ width: wp('80%'), color: 'black', paddingHorizontal: 20, }} />

                    </View>

                </View>

                <View style={{ alignItems: 'center', height: hp('9%'), justifyContent: 'flex-end' }}>
                    <View style={{ width: wp('90%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <View style={{ height: 60, width: wp('30%'), flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10 }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <View>
                                        <Image style={{ height: 30, width: 30 }} source={require('../assets/images/flag.png')} resizeMode={'contain'} />
                                    </View>

                                    <Text style={{ paddingHorizontal: 5, fontSize: 17 }}>+1</Text>
                                </View>

                                <View style={{ paddingHorizontal: 20 }}>
                                    <Image source={require('../assets/images/down.png')} style={{ height: 15, width: 15 }} resizeMode={'contain'} />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={{ height: 60, width: wp('55%'), flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, justifyContent: 'space-between', paddingHorizontal: 10 }}>
                            <TextInput
                                placeholder='987-654-3210'
                                style={{ width: wp('55%') }}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: hp('9%') }}>
                    <View style={{ height: 60, width: wp('90%'), flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, justifyContent: 'space-between', paddingHorizontal: 10 }}>

                        <TextInput
                            placeholder='Password'
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
                        <TouchableOpacity onPress={()=>{navigation.navigate('Verification')}}>
                            <View style={{ height: 60, backgroundColor: '#87001D', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View style={{ width: wp('70%'), alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#606E87' }}>
                                By clicking sign up you agreeing to the <Text style={{ color: 'black' }}>Terms of Services <Text style={{ color: '#606E87' }}>and</Text> Privacy policy.</Text>
                            </Text>
                        </View>
                    </View>
                </View>


                <View style={{ alignItems: 'center',  }}>
                

                    <View style={{ alignItems: 'center', height:hp('20%'), justifyContent:'flex-end' }}>
                        <View style={{ width: wp('70%'), alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#606E87' }} onPress={()=>{navigation.navigate('LocalLogin')}}>
                                Already have an account?<Text style={{ color: 'black' }}> Login </Text>
                            </Text>
                        </View>
                    </View>
                </View>







            
        </ImageBackground>
        </ScrollView>
    )
}

export default WelcomeToBot