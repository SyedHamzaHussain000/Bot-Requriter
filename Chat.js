import { View, Text, ImageBackground, Image, Dimensions, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const data = [
    { name: 'Jessie jdwm', recentMsg: 'hello man how are u', time: 'now' },
    { name: 'Jedsade wjm', recentMsg: 'hello man how are u', time: '2m ago' },
    { name: 'dsasdsa jdsm', recentMsg: 'hello man how are u', time: '4h ago' },
    { name: 'Jfsadassie jsdam', recentMsg: 'hello man how are u', time: 'now' },
    { name: 'dsadsasie jmdwa', recentMsg: 'hello man how are u', time: 'now' },
    { name: 'ewewqssie jsfm', recentMsg: 'hello man how are u', time: 'now' },
    { name: 'Jzxzzssie jsdam', recentMsg: 'hello man how are u', time: 'now' },
    { name: 'zczJessie jwdwm', recentMsg: 'hello man how are u', time: 'now' },
    { name: 'ccJcczessie jdwam', recentMsg: 'hello man how are u', time: 'now' },
    { name: 'bbbasdaJessie dwa', recentMsg: 'hello man how are u', time: 'now' },

]

const Chat = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ width: wp('90%'), alignSelf: 'center', height: hp('7%'), justifyContent: 'flex-end' }}>

                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Messages</Text>
                </View>

                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: 70, width: wp('90%'),  alignSelf: 'center', marginTop: 10, }}>
                                <View style={{ justifyContent: 'center', paddingHorizontal: 10, flexDirection: 'row' }}>
                                    <ImageBackground source={require('../assets/images/chatimg.png')} style={{ height: 80, width: 60, borderRadius: 20 }} resizeMode={'contain'} />


                                    <View style={{ flexDirection: 'row', width: wp('69%'), justifyContent: 'space-between', marginLeft: 10, marginTop: 10 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                                        <Text>{item.time}</Text>
                                    </View>

                                    {/* <Text style={{fontSize:15}}>{item.recentMsg}</Text> */}

                                </View>

                                

                            </View>



                        )
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default Chat