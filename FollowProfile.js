import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FollowProfile = () => {
    return (

        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
            <ScrollView >

                <View style={{ height: hp('15%'), backgroundColor: 'brown', justifyContent: 'flex-end' }} >


                    <View style={{ height: 100, width: 100, backgroundColor: "white", position: 'absolute', elevation: 10, borderRadius: 500, marginLeft: 20, alignItems: 'center', }}>
                        <Image source={require('../assets/images/dp.png')} style={{ height: 100, width: 100 }} resizeMode={'contain'} />
                    </View>

                </View>


                <View style={{ height: hp('6%'), width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={{ color: '#FF8E96', fontWeight: 'bold', fontSize: 15 }}>Mirza Uddin</Text>
                    <View style={{ height: 20, width: 20, backgroundColor: 'brown', borderRadius: 200, alignItems: "center", justifyContent: 'center', marginLeft: 10 }}>
                        <Image source={require('../assets/images/check.png')} style={{ height: 10, width: 10 }} />
                    </View>
                </View>

                <View style={{ width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 15 }}>@mirzauddin</Text>
                </View>


                <View style={{ width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 15 }}>Loram sadh bashd hasbdj vjhasvd vasdv</Text>
                </View>


                <View style={{ width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15, color: 'black' }}>317 Following</Text>
                    <Text style={{ fontSize: 15, marginLeft: 20, color: 'black' }}>500+ connections</Text>
                </View>


                <View style={{ width: wp('90%'), alignSelf: 'center', flexDirection: 'row', alignItems: 'flex-end', flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'brown', height: 40, width: 100, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Follow</Text>
                    </View>
                    <View style={{ marginLeft: 10, backgroundColor: 'brown', height: 40, width: 100, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Message</Text>
                    </View>

                    <View style={{ marginLeft: 10, backgroundColor: 'brown', height: 40, width: 40, borderRadius: 100, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', paddingHorizontal: 3 }}>
                        <View style={{ height: 7, width: 7, backgroundColor: 'white', borderRadius: 300 }} />
                        <View style={{ height: 7, width: 7, backgroundColor: 'white', borderRadius: 300 }} />
                        <View style={{ height: 7, width: 7, backgroundColor: 'white', borderRadius: 300 }} />
                    </View>
                </View>



                <View style={{ height: 2, backgroundColor: 'black', marginTop: 20 }} />

                <View style={{ width: wp('90%'), height: 100, alignSelf: 'center' }}>
                    <Text style={{ color: '#FF8E96', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>About</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>
                </View>

                <View style={{ height: 2, backgroundColor: 'black', marginTop: 20 }} />

                <View style={{ width: wp('90%'), height: 100, alignSelf: 'center' }}>
                    <Text style={{ color: '#FF8E96', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Experience</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>
                </View>

                <View style={{ height: 2, backgroundColor: 'black', marginTop: 20 }} />

                <View style={{ width: wp('90%'), height: 100, alignSelf: 'center' }}>
                    <Text style={{ color: '#FF8E96', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Eductaion</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>
                </View>

                <View style={{ height: 2, backgroundColor: 'black', marginTop: 20 }} />

                <View style={{ width: wp('90%'), height: 100, alignSelf: 'center' }}>
                    <Text style={{ color: '#FF8E96', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Licenses & Certification</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>
                </View>

                <View style={{ height: 2, backgroundColor: 'black', marginTop: 20 }} />

                <View style={{ width: wp('90%'), height: 100, alignSelf: 'center' }}>
                    <Text style={{ color: '#FF8E96', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Skills & Endorsements</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 4, width: 4, backgroundColor: 'black', borderRadius: 100, marginTop: 5 }} />
                        <Text style={{ paddingHorizontal: 10 }}>Lorem ipsum dolor sit amet</Text>
                    </View>
                </View>

                <View style={{ height: 2, backgroundColor: 'black', marginTop: 20 }} />

                <View style={{ width: wp('90%'), height: 100, alignSelf: 'center', marginBottom: 30 }}>
                    <Text style={{ color: '#FF8E96', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Recommendations</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ height: 50, width: 50, backgroundColor: "white", elevation: 4, borderRadius: 500, alignItems: 'center', justifyContent: 'flex-end', }}>
                            <Image source={require('../assets/images/dp.png')} style={{ height: 50, width: 50 }} resizeMode={'contain'} />
                        </View>


                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FF8E96', paddingHorizontal: 10 }}>Mirza Uddin</Text>

                        <Text>@emilyjones. 5h</Text>


                    </View>
                    <Text>sjan djknsajk djksab djkbsaj bdjasbjk dbsjab dksajkd bsajkbd kjsabkd bakbd kabdkj sabjk dsajkbd jkasbdjk sabkjd bsajkb dsa</Text>


                </View>

                <View style={{ height: 2, backgroundColor: 'black', marginTop: 30 }} />


                <View style={{ width: wp('90%'), height: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>See all</Text>


                </View>











            </ScrollView>

        </ImageBackground>

    )
}

export default FollowProfile