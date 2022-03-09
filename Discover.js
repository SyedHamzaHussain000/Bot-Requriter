import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-deck-swiper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const data = [
    { picture: require('../assets/images/img.png'), 'id': '1', 'name': 'Qtechnology' },
    { picture: require('../assets/images/img.png'), 'id': '1', 'name': 'Qtechnology' },
    { picture: require('../assets/images/img.png'), 'id': '1', 'name': 'Qtechnology' },
    { picture: require('../assets/images/img.png'), 'id': '1', 'name': 'Qtechnology' },
    { picture: require('../assets/images/img.png'), 'id': '1', 'name': 'Qtechnology' },
    { picture: require('../assets/images/img.png'), 'id': '1', 'name': 'Qtechnology' },
    { picture: require('../assets/images/img.png'), 'id': '1', 'name': 'Qtechnology' },
    { picture: require('../assets/images/img.png'), 'id': '1', 'name': 'Qtechnology' },
    { picture: require('../assets/images/img.png'), 'id': '1', 'name': 'Qtechnology' },

]


const Discover = () => {



    return (
        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center', height: hp('75%'), width: wp('100%'), alignItems: 'center' }}>
                    <Swiper
                        cards={data}
                        cardIndex={0}
                        stackSize={2}
                        verticalSwipe={false}
                        backgroundColor={'transparent'}
                        renderCard={(cards) => {
                            return (
                                <View style={{ height: 400, width: wp('80%'), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 30 }}>
                                    <ImageBackground source={(cards.picture)} style={{ height: 500, width: 500, justifyContent: 'space-between', marginTop: 30,}} resizeMode={'contain'}>
                                        <View style={{ height: 50, paddingHorizontal: 20, width: wp('80%'), alignSelf: 'center', marginTop: 15 }}>
                                            <View style={{ height: 30, width: 100, backgroundColor: 'brown', borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../assets/images/plane.png')} style={{ height: 12, width: 12, marginLeft: 7 }} resizeMode={'contain'} />
                                                <Text style={{ color: 'white', marginLeft: 5, fontSize: 12 }}>2.1ml</Text>
                                                <Text style={{ color: 'white', marginLeft: 5, fontSize: 12 }}>away</Text>
                                            </View>
                                        </View>

                                        <View style={{ height: 100, width: wp('80%'), alignSelf: 'center', marginTop: 15 }}>
                                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>Mirza Uddin</Text>

                                            <View style={{ height: 40, width: wp('40%'), backgroundColor: 'brown', borderRadius: 100, alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../assets/images/locate.png')} style={{ height: 15, width: 15, marginLeft: 20 }} resizeMode={'contain'} />
                                                <Text style={{ color: 'white', fontSize: 12, alignSelf: 'center', marginLeft: 5 }}>XYZ NYC</Text>
                                            </View>
                                        </View>

                                    </ImageBackground>
                                </View>
                            )
                        }}
                    />
                </View>

                <View style={{ height: hp('11%'), flexDirection: 'row', width: wp('70%'), alignSelf: "center", justifyContent: 'space-around' }}>
                    <View style={{ height: 40, width: 40, backgroundColor: '#BCBFC1', borderRadius: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/reload.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                    </View>

                    <View style={{ height: 55, width: 55, backgroundColor: 'black', borderRadius: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/close.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                    </View>


                    <View style={{ height: 40, width: 40, backgroundColor: '#FFB649', borderRadius: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/star.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                    </View>


                    <View style={{ height: 55, width: 55, backgroundColor: '#FF6969', borderRadius: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/like.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                    </View>


                    <View style={{ height: 40, width: 40, backgroundColor: '#B380FF', borderRadius: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/call.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                    </View>
                </View>






            </ScrollView>
        </ImageBackground>
    )
}

export default Discover