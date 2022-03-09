import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SettingHome = ({navigation}) => {
    return (
        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
            <ScrollView>

                <View style={{ height: hp('15%'), width: wp('90%'), alignSelf: 'center', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/images/home.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                            <Text style={{ color: '#808080', fontSize: 20, marginLeft: 10 }}>Home</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: 'center', width: wp('90%'), height: hp('10%'), justifyContent: 'flex-end', }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('FollowingProfile')}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/images/profile.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                            <Text style={{ color: '#808080', fontSize: 20, marginLeft: 10 }}>Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: 'center', width: wp('90%'), height: hp('10%'), justifyContent: 'flex-end', }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/images/files.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                            <Text style={{ color: '#808080', fontSize: 20, marginLeft: 10 }}>My Files</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ alignSelf: 'center', width: wp('90%'), height: hp('10%'), justifyContent: 'flex-end', }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/images/fav.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                            <Text style={{ color: '#808080', fontSize: 20, marginLeft: 10 }}>Favorites Files</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ alignSelf: 'center', width: wp('90%'), height: hp('10%'), justifyContent: 'flex-end', }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/images/share.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                            <Text style={{ color: '#808080', fontSize: 20, marginLeft: 10 }}>Shared Folders</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ alignSelf: 'center', width: wp('90%'), height: hp('10%'), justifyContent: 'flex-end', }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/images/noti.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                            <Text style={{ color: '#808080', fontSize: 20, marginLeft: 10 }}>Notification</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ alignSelf: 'center', width: wp('90%'), height: hp('10%'), justifyContent: 'flex-end', }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/images/stats.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                            <Text style={{ color: '#808080', fontSize: 20, marginLeft: 10 }}>Drive Stats</Text>
                        </View>
                    </TouchableOpacity>
                </View>



                <View style={{ alignSelf: 'center', width: wp('90%'), height: hp('10%'), justifyContent: 'flex-end', }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Setting')}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/images/setting.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                            <Text style={{ color: '#808080', fontSize: 20, marginLeft: 10 }}>Setting</Text>
                        </View>
                    </TouchableOpacity>
                </View>



                <View style={{ alignSelf: 'center', width: wp('90%'), height: hp('10%'), justifyContent: 'flex-end', }}>
                    <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../assets/images/support.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                        <Text style={{ color: '#808080', fontSize: 20, marginLeft: 10 }}>Support</Text>
                    </View>
                    </TouchableOpacity>
                </View>




                <TouchableOpacity  style={{ width: wp('90%'), justifyContent: 'flex-end', height: hp('10%'), alignSelf: 'center', marginBottom: 20, marginTop: 15 }}>
                    <View style={{ height: 70, backgroundColor: '#87001D', borderRadius: 20, alignItems: 'center', paddingLeft: 20, flexDirection: 'row' }}>
                        <Image source={require('../assets/images/power.png')} style={{ height: 20, width: 20 }} />
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Log Out</Text>
                    </View>
                </TouchableOpacity>





            </ScrollView>
        </ImageBackground>
    )
}

export default SettingHome