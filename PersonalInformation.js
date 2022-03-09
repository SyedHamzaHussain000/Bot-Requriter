import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PersonalInformation = ({navigation}) => {
    return (

        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
            <ScrollView >


                <View style={{ marginTop: 25 }}>



                    <View style={{ height: 50, alignItems: 'center', marginTop: 25 }}>
                        <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput placeholder='First name*' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                    </View>
                </View>


                <View style={{ marginTop: 10 }}>



                    <View style={{ height: 50, alignItems: 'center' }}>
                        <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput placeholder='Last name' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                    </View>
                </View>



                <View style={{ marginTop: 10 }}>

                    <View style={{ height: 50, alignItems: 'center' }}>
                        <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput placeholder='Additional name' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                    </View>
                </View>




                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: wp('90%') }}>
                        <Text style={{ color: 'brown', fontWeight: 'bold' }}>+Add name pronunciation</Text>
                    </View>
                </View>


                <View style={{ marginTop: 10 }}>

                    <View style={{ height: 50, alignItems: 'center' }}>
                        <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput placeholder='Headline*' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                    </View>
                </View>




                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: wp('90%') }}>
                        <Text style={{ color: 'brown', fontWeight: 'bold' }}>Current Position</Text>
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>

                    <View style={{ height: 50, alignItems: 'center' }}>
                        <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput placeholder='Position*' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                    </View>
                </View>






                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: wp('90%') }}>
                        <Text style={{ color: 'brown', fontWeight: 'bold' }}>+Add new position</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <View style={{ width: wp('90%'), flexDirection: 'row' }}>
                        <View style={{ height: 20, width: 20, backgroundColor: '#9FC13B', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/images/blu.png')} resizeMode={'contain'} />
                        </View>

                        <Text style={{ paddingHorizontal: 10 }}>Show current company in my intro</Text>
                    </View>
                </View>


                <View style={{ marginTop: 10 }}>

                    <View style={{ height: 50, alignItems: 'center' }}>
                        <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput placeholder='Industry*' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                    </View>
                </View>











                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: wp('90%') }}>
                        <Text style={{ color: 'brown', fontWeight: 'bold' }}>Education</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: wp('90%') }}>
                        <Text style={{ color: 'brown', fontWeight: 'bold' }}>+Add name education</Text>
                    </View>
                </View>

                <View >

                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View style={{ width: wp('90%') }}>
                            <Text style={{ color: 'brown', fontWeight: 'bold' }}>Location</Text>
                        </View>
                    </View>

                    <View style={{ height: 50, alignItems: 'center' }}>
                        <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput placeholder='Country/Region' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                    </View>
                </View>




                <View >

                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View style={{ width: wp('90%') }}>
                            <Text style={{ color: 'brown', fontWeight: 'bold' }}>Use current location</Text>
                        </View>
                    </View>

                    <View style={{ height: 50, alignItems: 'center' }}>
                        <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput placeholder='Country/Region' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                    </View>
                </View>




                <View >

                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View style={{ width: wp('90%') }}>
                            <Text style={{ color: 'brown', fontWeight: 'bold' }}>Contact info</Text>
                        </View>
                    </View>

                    <View style={{ height: 50, alignItems: 'center' }}>
                        <View style={{ height: 50, width: wp('90%'), flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TextInput placeholder='' placeholderTextColor={'black'} style={{ width: wp('85%'), color: 'black' }} />
                        </View>
                    </View>

                    {/* <View style={{ alignItems: 'center' }}>
                        <View style={{ width: wp('90%'), borderWidth: 0.5, borderColor: '#78808C' }} />
                    </View> */}
                </View>

                <View style={{ alignItems: 'center', marginBottom:20 }}>
                    <View style={{ width: wp('90%'), justifyContent: 'flex-end', height: hp('10%') }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Geolocation')}}>
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

export default PersonalInformation