import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const LocalLogin = ({navigation}) => {
    return (

        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: wp('100%'), height: hp('100%') }}>
            <ScrollView>
                <View>
                    <View style={{ height: hp('20%'), alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Image style={{ width: 150, height: 100 }} source={require('../assets/images/logo.png')} resizeMode={'stretch'} />
                    </View>


                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: wp('90%'), height: 60, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 30, color: '#6D6E70', fontWeight: 'bold' }}>Login!</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('LocalLogin')}}>
                            <View style={{ width: wp('90%'), height: 20, flexDirection: 'row' }}>
                                <Text style={{ color: 'black' }}>or </Text>
                                <Text style={{ color: '#BA1E2D', textDecorationLine: 'underline' }}>Sign in</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: hp('10%'), alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{ width: wp('90%'), height: 60, backgroundColor: '#EEEEEE', borderRadius: 20, justifyContent: 'space-between', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: wp('70') }}>
                                <TextInput placeholder='Johndoe112@gmail.com' placeholderTextColor={'#606E87'} style={{ color: 'black' }} />
                            </View>

                            <View style={{ height: 20, width: 20, backgroundColor: '#BA1E2D', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 10, width: 10 }} source={require('../assets/images/tick.png')} />
                            </View>

                        </View>

                    </View>

                    <View style={{ height: hp('10%'), alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{ width: wp('90%'), height: 60, backgroundColor: '#EEEEEE', borderRadius: 20, justifyContent: 'space-between', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: wp('70%') }}>
                                <TextInput placeholder='Password' placeholderTextColor={'#A9ACB1'} style={{ color: 'black', }} secureTextEntry />
                            </View>

                            <TouchableOpacity>
                                <Image style={{ height: 15, width: 20, }} source={require('../assets/images/seen.png')} resizeMode={'stretch'} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ height: hp('3%'), alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View style={{ width: wp('90%'), alignItems: 'flex-end' }}>
                                <Text style={{ color: '#606E87', fontWeight: 'bold' }}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: hp('5%'), alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: wp('90%'), alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 15 }}>You’ll recieve an SMS with a password to this number.</Text>
                        </View>
                    </View>

                    <View style={{ height: hp('8%'), alignItems: 'center', justifyContent: 'center' }}>

                        <TouchableOpacity onPress={()=>{navigation.navigate('PersonalInfo')}}>
                            <View style={{ width: wp('50%'), alignItems: 'center', backgroundColor: 'black', height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>LOGIN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: hp('8%'), alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
                            <View style={{ width: wp('50%'), alignItems: 'center', backgroundColor: '#87001D', height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>SIGN UP</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: hp('20%'), alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: wp('70%'), alignItems: 'center', borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 15 }}>By registering in </Text>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Botrecruiter,</Text>
                            <Text style={{ color: 'black', fontSize: 15 }}> you </Text>
                        </View>
                        <View style={{ width: wp('70%'), alignItems: 'center', borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 15 }}>are accepting </Text>
                            <TouchableOpacity>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline' }}>End-User Agreement</Text>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 15 }}> and </Text>
                        </View>

                        <View style={{ width: wp('70%'), alignItems: 'center', borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 20 }}>Privacy Policy </Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                </View>


            </ScrollView>
        </ImageBackground>

    )
}

export default LocalLogin