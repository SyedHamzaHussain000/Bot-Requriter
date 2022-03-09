import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ForgotPassword = () => {
  return (


    <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
      <ScrollView >

        <View style={{ alignItems: 'center' }}>
          <View style={{ width: wp('90%'), height: hp('13%'), justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#424242', marginTop: 10 }}>Forgot Password?</Text>
          </View>
        </View>



        <View style={{ alignItems: 'center' }}>
          <View style={{ width: wp('90%'), }}>
            <Text style={{ fontSize: 15, color: '#424242', marginTop: 5 }}>please enter your email below to recieve your password reset instructions.</Text>
          </View>
        </View>


        <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: hp('30%'), }}>
          <View style={{ height: 60, width: wp('90%'), flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, justifyContent: 'space-between', paddingHorizontal: 10 }}>

            <TextInput placeholder='lindasmith@email.com' style={{ width: wp('80%'), color: 'black', paddingHorizontal: 20, }} />

            <View >
              <View style={{ height: 20, width: 20, backgroundColor: '#9FC13B', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                <Image source={require('../assets/images/g.png')} style={{ height: 12, width: 12 }} resizeMode={'contain'} />
              </View>

            </View>

          </View>

        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ width: wp('90%'), justifyContent: 'flex-end', height: hp('10%') }}>
            <TouchableOpacity>
              <View style={{ height: 60, backgroundColor: '#87001D', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>Send Email</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>







      </ScrollView>
    </ImageBackground>


  )
}

export default ForgotPassword