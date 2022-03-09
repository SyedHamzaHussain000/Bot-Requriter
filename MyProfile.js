import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    { "name": 'Documents', "item": '2', "update": 'Last update 1 day ago' },
    { "name": 'Photos', "item": '15', "update": 'Last update 25 day ago' },


]

const MyProfile = () => {
    return (
        <ImageBackground source={require('../assets/images/bg.png')} style={{ width: windowWidth, height: windowHeight }}>
            <ScrollView>

                <View style={{ height: hp('35%'), justifyContent: 'flex-end' }}>

                    <ImageBackground source={require('../assets/images/line.png')} style={{ height: 170, width: wp('90%'), backgroundColor: 'brown', alignSelf: 'center', borderRadius: 20, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: 100, width: wp('15%'), alignItems: 'flex-end', justifyContent: 'center', }}>
                                <View style={{ height: 50, width: 50, backgroundColor: 'white', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../assets/images/pfp.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                                </View>
                            </View>

                            <View style={{ height: 100, justifyContent: 'center', width: wp(49) }}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold', paddingHorizontal: 20, color: 'white' }}>Linda Smith</Text>
                                <Text style={{ paddingHorizontal: 20, color: 'white' }}>Product Designer</Text>
                            </View>

                            <View style={{ height: 100, justifyContent: 'center' }}>
                                <View style={{ width: wp("20%"), height: 30, backgroundColor: 'white', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'brown', fontWeight: 'bold' }}>Premium</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: wp('83%'), alignSelf: "center", height: 60 }}>
                            <Text style={{ color: 'white' }}>dsaiuhd saaskjd akd ksakd wukabdkj bakudbk abwkjdbjasb kdjasbdb wakbd kjasbkud bakjbd kabdkj askudb awkjbd kabd ksjab dkwak bdakjb</Text>
                        </View>

                    </ImageBackground>

                </View>

                <View style={{ height: 70, flexDirection: 'row', width: wp('90%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>My Folder</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'brown' }}>View All</Text>
                </View>

                <View>
                    <FlatList
                        horizontal
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ height: 250, width: 300, backgroundColor: 'brown', borderRadius: 50, marginHorizontal: 10, }}>

                                    <View style={{ height: 100, width: 250, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../assets/images/folder.png')} style={{ height: 50, width: 50 }} resizeMode={'contain'} />
                                        </View>

                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../assets/images/dot.png')} style={{ height: 70, width: 70 }} resizeMode={'contain'} />
                                        </View>
                                    </View>

                                    <View style={{ alignSelf: 'center', width: 250 }}>
                                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>{item.name}</Text>
                                    </View>

                                    <View style={{ alignSelf: 'center', width: 250, marginTop: 5 }}>
                                        <Text style={{ fontSize: 20, color: 'white' }}>{item.item}</Text>
                                    </View>

                                    <View style={{ alignSelf: 'center', width: 250, marginTop: 20 }}>
                                        <Text style={{ color: 'white' }}>{item.update}</Text>
                                    </View>
                                </View>


                            )
                        }}

                    />
                </View>

                <View style={{ width: wp('90%'), alignSelf: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Recent Uploads</Text>
                </View>

                <View style={{ height: 70, width: wp('90%'), alignSelf: 'center', backgroundColor: 'white', marginTop: 20, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
                            <Image source={require('../assets/images/gallary.png')} style={{ height: 30, width: 30 }} resizeMode={'contain'} />
                        </View>
                        <View style={{ justifyContent: 'center', }}>
                            <Text style={{ color: 'black' }}>IMG22164.jpg</Text>
                            <Text>1.5mb</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingRight: 10 }}>
                        <Image source={require('../assets/images/dot.png')} style={{ height: 70, width: 70 }} resizeMode={'contain'} />
                    </View>
                </View>


                <View style={{ height: 70, width: wp('90%'), alignSelf: 'center', backgroundColor: 'white', marginTop: 20, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
                            <Image source={require('../assets/images/pdf.png')} style={{ height: 30, width: 30 }} resizeMode={'contain'} />
                        </View>
                        <View style={{ justifyContent: 'center', }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ color: 'black' }}>My_Personal_CV.jpg</Text>
                                <Text style={{paddingHorizontal:25}}>25%</Text>
                            </View>

                            <View style={{height:5, width:wp('50%'), backgroundColor:'#DAE0E8', borderRadius:50}}> 
                                <View style={{height:5, width:wp('15%'), backgroundColor:'blue', borderRadius:50}}/>
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingRight: 10 }}>
                        <Image source={require('../assets/images/dot.png')} style={{ height: 70, width: 70 }} resizeMode={'contain'} />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default MyProfile