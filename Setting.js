import { View, Text, ImageBackground, Image, Dimensions, Switch } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Setting = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchSecond = () => setIsEnabled2(previousState => !previousState);

    return (
        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>




            <View style={{ height: hp('20%'), width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>

                <View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Add Account</Text>
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate('') }}>
                    <View>
                        <Image source={require('../assets/images/go.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{ height: hp('10%'), width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Change Password</Text>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('')}}>
                    <View>
                        <Image source={require('../assets/images/go.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ height: hp('10%'), width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Upgrade Account</Text>
                </View>

                <View>
                    <Image source={require('../assets/images/go.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                </View>
            </View>

            <View style={{ height: hp('10%'), width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Change Password</Text>
                </View>

                <View>
                    <Image source={require('../assets/images/go.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                </View>
            </View>


            <View style={{ height: hp('10%'), width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Notification</Text>
                </View>

                <View>
                    <Switch
                        trackColor={{ false: "#767577", true: "brown" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled} />
                </View>
            </View>


            <View style={{ height: hp('10%'), width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Theme</Text>
                </View>

                <View>
                    <Switch
                        trackColor={{ false: "#767577", true: "brown" }}
                        thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchSecond}
                        value={isEnabled2} />
                </View>
            </View>




        </ImageBackground>
    )
}

export default Setting