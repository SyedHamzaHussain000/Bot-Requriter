import { View, TextLoginSelect, Image, Text } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginSelect = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ height: hp('23%') }}>
                <Image style={{ height: hp('40%'), width: wp('100%') }} source={require('../assets/images/top.png')} resizeMode={'cover'} />
            </View>

            <View style={{ height: hp('23%'), alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: hp('25'), width: wp('60%'), alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ height: 150, width: 240 }} source={require('../assets/images/logo.png')} resizeMode={'stretch'} />
                </View>
            </View>

            <View style={{ height: hp('5%'), alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#6D6E70' }}>Hello!</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={{ width: wp('80%'), alignItems: 'center' }}>
                    <Text style={{ color: 'black' }}>Choose a convinenient way to register or login to the app.</Text>
                </View>
            </View>





            <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate('LocalLogin')}}>
                    <View style={{ height: 40, width: wp('50%'), backgroundColor: 'blue', borderRadius: 10, elevation: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ padding: 10 }}>
                            <Image style={{ height: 20, width: 10, }} source={require('../assets/images/facebook.png')} />
                        </View>
                        <Text style={{ color: 'white' }}>Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity activeOpacity={0.95} onPress={()=>{navigation.navigate('LocalLogin')}}>
                    <View style={{ height: 40, width: wp('50%'), backgroundColor: 'silver', borderRadius: 10, elevation: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ padding: 10 }}>
                            <Image style={{ height: 20, width: 15, }} source={require('../assets/images/apple.png')} />
                        </View>
                        <Text style={{color:'white'}}>Apple ID</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity activeOpacity={0.95} onPress={()=>{navigation.navigate('LocalLogin')}}>
                    <View style={{ height: 40, width: wp('50%'), backgroundColor: 'gray', borderRadius: 10, elevation: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ padding: 10 }}>
                            <Image style={{ height: 20, width: 20, }} source={require('../assets/images/google.png')} />
                        </View>
                        <Text style={{ color: 'white' }}>Google</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate('LocalLogin')}}>
                    <View style={{ height: 40, width: wp('50%'), backgroundColor: 'black', borderRadius: 10, elevation: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ padding: 10 }}>
                            <Image style={{ height: 20, width: 20, }} source={require('../assets/images/phone.png')} />
                        </View>
                        <Text style={{ color: 'white' }}>Apple ID</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={()=>{navigation.navigate('LocalLogin')}}>
                    <View style={{ alignItems: 'center', padding: 10 }}>
                        <Image style={{ height: 20, width: 20 }} source={require('../assets/images/headset.png')} />
                    </View>
                    <Text style={{ color: 'black' }}>
                        Support
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: wp('100%'), flex:1, alignItems: 'center', justifyContent: 'flex-end' }} >
                <Image style={{ width: wp('100%'), flex:1 }} source={require('../assets/images/bottom.png')} resizeMode={'cover'} />
            </View>



        </View>
    )
}

export default LoginSelect