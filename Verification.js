import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Verification = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
      <ScrollView >

        <View style={{ alignItems: 'center' }}>
          <View style={{ width: wp('90%'), height: hp('13%'), justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#424242', marginTop: 10 }}>Verification</Text>
          </View>
        </View>



        <View style={{ alignItems: 'center' }}>
          <View style={{ width: wp('90%'), }}>
            <Text style={{ fontSize: 15, color: '#424242', marginTop: 5 }}>Please check your message for a six-digit security code and enter below.</Text>
          </View>
        </View>


        <View style={{ alignItems: 'center', }}>

                    <View style={{  flexDirection: 'row', width: wp('80%'), height: hp('25%'), alignItems: 'flex-end', justifyContent: 'space-between' }}>


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
                
                <View style={{ alignItems:'center', marginTop:10}}>
                    <Text style={{color:'#606E87'}}>Didn't receive a code? <Text style={{color:'black'}}>Resend code</Text></Text>
                </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ width: wp('90%'), justifyContent: 'flex-end', height: hp('10%') }}>
            <TouchableOpacity onPress={()=>{navigation.navigate('PersonalInfo')}}>
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

export default Verification