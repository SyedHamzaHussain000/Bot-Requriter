import { View, Text, ImageBackground, Image, Dimensions, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    { name: 'Alexa Denial', location: 'XYZ NYC', image: 'jdsabnjdbnaskndsak' },
    { name: 'Dora Denisad', location: 'XYZ NYC', image: 'jdsabnjdbnaskndsak' },
    { name: 'Flora Proda', location: 'XYZ NYC', image: 'jdsabnjdbnaskndsak' },
]

const Map = () => {

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <MapView
                style={{ height: hp('50%') }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View style={{ height: hp('50%'), backgroundColor: 'white', elevation: 1 }}>
                <View style={{ height: hp('7%'), alignSelf: 'center', width: wp('90%'), justifyContent: "flex-end" }}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', }}>Top Matches</Text>
                </View>

                <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: 220, width: 180, marginHorizontal: 10, borderRadius: 15 }}>
                                <ImageBackground source={require('../assets/images/datapic.png')} style={{ height: 220, width: 190, justifyContent: 'flex-end' }} resizeMode={'stretch'}>
                                    <View style={{ height: 80, width:wp('40%'), alignSelf:'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', elevation:5 }}>{item.name}</Text>

                                        <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                                            <Image source={require('../assets/images/local.png')} style={{height:20, width:20}}/>
                                            <Text style={{fontSize: 15, color: 'white', elevation:10, marginLeft:5,  }}>{item.location}</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        )
                    }}
                />
            </View>


        </View >
    )
}

export default Map