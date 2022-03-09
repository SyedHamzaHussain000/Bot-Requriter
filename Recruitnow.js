import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Recruitnow = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: hp('70%') }}>
                <Image source={require('../assets/images/tele.png')} style={{ height: 400, width: 400 }} resizeMode={'contain'} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ height: 60, width: wp('50%'), backgroundColor: 'white', elevation: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                   
                        <Text style={{ color: '#961A26', fontSize: 15, fontWeight: 'bold' }}>Recruit Now</Text>
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Recruitnow