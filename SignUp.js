import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const SignUp = ({navigation}) => {
    return (
        <View style={{ backgroundColor: '#E8EBF0', flex: 1 }}>
            <ScrollView>
                <ImageBackground style={{ height: hp('30%'), width: wp('100%') }} source={require('../assets/images/signuptop.png')}>
                    <View style={{ height: hp('23%'), justifyContent: "flex-end", paddingHorizontal: 15 }}>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>SIGNUP</Text>
                    </View>
                    <View style={{ justifyContent: "flex-end", paddingHorizontal: 15, width: wp('60%') }}>
                        <Text style={{ color: 'white', fontSize: 15, }}>Enter your personal details to create your account</Text>
                    </View>
                </ImageBackground>

                <View>

                    <View>
                        <View style={{ height: 50, alignItems: 'center', justifyContent: 'flex-end', }}>
                            <View style={{ width: wp('90%'), height: 20, justifyContent: 'flex-end' }}>
                                <Text style={{ color: '#78808C' }}>Full name</Text>
                            </View>
                        </View>


                        <View style={{ height: 50, alignItems: 'center' }}>
                            <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                                <TextInput placeholder='linda Smith' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />

                                <View style={{ paddingBottom: 15 }}>
                                    <View style={{ height: 20, width: 20, backgroundColor: '#BD272D', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                        <Image source={require('../assets/images/check.png')} style={{ height: 10, width: 10, }} />
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                        </View>
                    </View>





                    <View>
                        <View style={{ height: 50, alignItems: 'center', justifyContent: 'flex-end', }}>
                            <View style={{ width: wp('90%'), height: 20, justifyContent: 'flex-end' }}>
                                <Text style={{ color: '#78808C' }}>Email</Text>
                            </View>
                        </View>


                        <View style={{ height: 50, alignItems: 'center' }}>
                            <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                                <TextInput placeholder='lindasmith@email.com' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />

                                <View style={{ paddingBottom: 15 }}>
                                    <View style={{ height: 20, width: 20, backgroundColor: '#BD272D', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                        <Image source={require('../assets/images/check.png')} style={{ height: 10, width: 10 }} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                        </View>
                    </View>






                    <View>
                        <View style={{ height: 50, alignItems: 'center', justifyContent: 'flex-end', }}>
                            <View style={{ width: wp('90%'), height: 20, justifyContent: 'flex-end' }}>
                                <Text style={{ color: '#78808C' }}>Password</Text>
                            </View>
                        </View>


                        <View style={{ height: 50, alignItems: 'center' }}>
                            <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                                <TextInput placeholder='Enter password' placeholderTextColor={'black'} secureTextEntry style={{ width: wp('85%'), color: 'black' }} />

                                <View style={{ paddingBottom: 15 }}>
                                    <TouchableOpacity>
                                        <View style={{ height: 20, width: 20, backgroundColor: '#78808C', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                            <Image source={require('../assets/images/eye.png')} resizeMode={'stretch'} style={{ height: 6.5, width: 10, }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                        </View>
                    </View>






                    <View>
                        <View style={{ height: 50, alignItems: 'center', justifyContent: 'flex-end', }}>
                            <View style={{ width: wp('90%'), height: 20, justifyContent: 'flex-end' }}>
                                <Text style={{ color: '#78808C' }}>Confirm Password</Text>
                            </View>
                        </View>


                        <View style={{ height: 50, alignItems: 'center' }}>
                            <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                                <TextInput placeholder='confirm password' placeholderTextColor={'black'} secureTextEntry style={{ width: wp('85%'), color: 'black' }} />

                            </View>

                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                        </View>
                    </View>



                    <TouchableOpacity onPress={()=>{navigation.navigate('WelcomeToBot')}}>
                        <View style={{ height: hp('12%'), alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: wp('90%'), backgroundColor: '#87001D', height: 60, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Sign Up</Text>
                            </View>
                        </View>
                    </TouchableOpacity>



                    <View style={{ height: hp('5%'), alignItems: 'center', }}>
                        <View style={{ width: wp('70%'), }}>
                            <Text style={{ color: '#78808C' }}>By clicking on signup, you agree to our Service and Terms</Text>
                        </View>
                    </View>


                </View>

            </ScrollView>
        </View>
    )
}

export default SignUp