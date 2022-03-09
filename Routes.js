import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import LoginSelect from './LoginSelect';
import LocalLogin from './LocalLogin';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import RecoveryPassword from './RecoveryPassword';
import CongratsLogin from './CongratsLogin';
import WelcomeToBot from './WelcomeToBot';
import Verification from './Verification';
import PersonalInformation from './PersonalInformation';
import Geolocation from './Geolocation';
import Security from './Security';
import Media from './Media';
import Payment from './Payment';
import Messing from './Messing';
import RealTime from './RealTime';
import SettingHome from './SettingHome';
import Setting from './Setting';
import MyProfile from './MyProfile';
import FollowProfile from './FollowProfile';
import Recruitnow from './Recruitnow';
import CompanyValue from './CompanyValue';
import FocusCulture from './FocusCulture';
import InReacuring from './InReacuring';
import PotentialCandidate from './PotentialCandidate';
import TalentOnline from './TalentOnline';
import Discover from './Discover';
import Map from './Map';
import Chat from './Chat';
import HeartNotification from './HeartNotification';
import call from './call';
import VideoCall from './VideoCall';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();


function MyStack(props, navigation) {
    return (

        <Stack.Navigator initialRouteName='LoginSelect'>
            {/* <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} /> */}
            <Stack.Screen name="LoginSelect" component={LoginSelect}
                options={{ headerShown: false }}

            />
            <Stack.Screen name="LocalLogin" component={LocalLogin} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.navigate('LocalLogin') }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="RecoverPassword" component={RecoveryPassword}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />
            <Stack.Screen name="CongratsLogin" component={CongratsLogin} options={{ headerShown: false }} />

            <Stack.Screen name="WelcomeToBot" component={WelcomeToBot}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="Verification" component={Verification}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />


            <Stack.Screen name="PersonalInfo" component={PersonalInformation}

                options={{
                    headerMode: 'float',
                    headerTitle: "Personal Information",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />


            <Stack.Screen name="Geolocation" component={Geolocation}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="Security" component={Security}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="Media" component={Media}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="Payment" component={Payment}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="Message" component={Messing}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="RealTime" component={RealTime}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="SettingHome" component={SettingHome}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack(null);
                        }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="Setting" component={Setting}

                options={{
                    headerMode: 'float',
                    headerTitle: "Setting",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="Profile" component={MyProfile}

                options={{
                    headerMode: 'float',
                    headerTitle: "My Profile",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>

                            <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />

                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="FollowingProfile" component={FollowProfile} options={{ headerShown: false }} />

            <Stack.Screen name="Recruitnow" component={Recruitnow} options={{ headerShown: false }} />

            <Stack.Screen name="CompanyValues" component={CompanyValue}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="Focusculture" component={FocusCulture}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />


            <Stack.Screen name="InRecuring" component={InReacuring}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />


            <Stack.Screen name="Potential" component={PotentialCandidate}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="TalentOnline" component={TalentOnline}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <Stack.Screen name="Call" component={call}

                options={{
                    headerMode: 'float',
                    headerTitle: "End-to-end encrypted",
                    headerTitleAlign: 'center',
                    headerShown: true,
                    headerTransparent: true,
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { }} style={{ justifyContent: 'center', marginLeft: 10 }}>
                            <Image source={require('../assets/images/goback.png')} style={{ height: 30, width: 30 }} resizeMode={'contain'} />
                        </TouchableOpacity>,

                    headerRight: () =>
                        <View style={{ height: 40, width: 40, backgroundColor: 'gray', borderRadius: 300, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/images/profilepic.png')} style={{ height: 40, width: 40 }} resizeMode={'contain'} />
                        </View>,



                }} />

            <Stack.Screen name="VideoCall" component={VideoCall}

                options={{
                    headerMode: 'float',
                    headerTitle: "End-to-end encrypted",
                    headerTitleAlign: 'center',
                    headerShown: true,
                    headerTransparent: true,
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { }} style={{ justifyContent: 'center', marginLeft: 10 }}>
                            <Image source={require('../assets/images/goback.png')} style={{ height: 30, width: 30 }} resizeMode={'contain'} />
                        </TouchableOpacity>,

                    headerRight: () =>
                        <View style={{ height: 40, width: 40, backgroundColor: 'gray', borderRadius: 300, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/images/profilepic.png')} style={{ height: 40, width: 40 }} resizeMode={'contain'} />
                        </View>,



                }} />

            <Tab.Screen name='MyTabs' component={MyTabs} />




        </Stack.Navigator>
    );
}

// const LogInSignUpFlow = ({navigation}) => {
//     return (
//         <LoginStack.Navigator initialRouteName='LoginSelect'>
//             <LoginStack.Screen name="LoginSelect" component={LoginSelect}
//                 options={{ headerShown: false }}

//             />
//             <LoginStack.Screen name="LocalLogin" component={LocalLogin} options={{ headerShown: false }} />
//             <LoginStack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
//             <LoginStack.Screen name="ForgotPassword" component={ForgotPassword}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />

//             <LoginStack.Screen name="RecoverPassword" component={RecoveryPassword}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />
//             <LoginStack.Screen name="CongratsLogin" component={CongratsLogin} options={{ headerShown: false }} />

//             <LoginStack.Screen name="WelcomeToBot" component={WelcomeToBot}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />

//             <LoginStack.Screen name="Verification" component={Verification}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />


//             <LoginStack.Screen name="PersonalInfo" component={PersonalInformation}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "Personal Information",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />


//             <LoginStack.Screen name="Geolocation" component={Geolocation}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />

//             <LoginStack.Screen name="Security" component={Security}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />

//             <LoginStack.Screen name="Media" component={Media}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />

//             <LoginStack.Screen name="Payment" component={Payment}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />

//             <LoginStack.Screen name="Message" component={Messing}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />

//             <LoginStack.Screen name="RealTime" component={RealTime}

//                 options={{
//                     headerMode: 'float',
//                     headerTitle: "",
//                     headerTitleAlign: 'center',
//                     headerTransparent: true,

//                     headerLeft: () =>
//                         <TouchableOpacity onPress={() => { navigation.goBack() }}>
//                             <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
//                                 <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
//                             </View>
//                         </TouchableOpacity>,

//                     headerLeftContainerStyle: {
//                         left: 15,

//                     },
//                     headerStyle: {

//                         elevation: 0,
//                         shadowColor: 'transparent'
//                     },
//                 }}
//             />
//         </LoginStack.Navigator>
//     )
// }

const HomeStacks = ({ navigation }) => {
    return (
        <HomeStack.Navigator initialRouteName='Home' >
            {/* <HomeStack.Screen name='LoginSignUpFlow' component={LogInSignUpFlow} /> */}

            <HomeStack.Screen name='Home' component={Discover}
                options={{
                    tabBarShowLabel:false,
                    headerMode: 'float',
                    headerTitle: "Discover",
                    headerTitleAlign: 'center',
                    headerShown: true,
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.navigate('SettingHome') }} style={{ justifyContent: 'center', marginLeft: 10 }}>
                            <Image source={require('../assets/images/menu.png')} style={{ height: 30, width: 30 }} resizeMode={'contain'} />
                        </TouchableOpacity>,

                    headerRight: () =>
                        <View style={{ height: 40, width: 40, backgroundColor: 'gray', borderRadius: 300, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/images/profilepic.png')} style={{ height: 40, width: 40 }} resizeMode={'contain'} />
                        </View>,

                    tabBarIcon: () => {

                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>


                                <Image
                                    source={require('../assets/images/home.png')}
                                    resizeMode='contain'
                                    style={{ width: 25, height: 25 }}

                                />



                            </View>

                        )

                    },



                }} />

            <HomeStack.Screen name="SettingHome" component={SettingHome}

                options={{
                    headerMode: 'float',
                    headerTitle: "",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack(null);
                        }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <HomeStack.Screen name="Setting" component={Setting}

                options={{
                    headerMode: 'float',
                    headerTitle: "Setting",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={{ height: 40, width: 40, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <HomeStack.Screen name="Profile" component={MyProfile}

                options={{
                    headerMode: 'float',
                    headerTitle: "My Profile",
                    headerTitleAlign: 'center',
                    headerTransparent: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>

                            <Image style={{ height: 25, width: 25 }} source={require('../assets/images/back.png')} resizeMode={'contain'} />

                        </TouchableOpacity>,

                    headerLeftContainerStyle: {
                        left: 15,

                    },
                    headerStyle: {

                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                }}
            />

            <HomeStack.Screen name="FollowingProfile" component={FollowProfile} options={{ headerShown: false }} />


        </HomeStack.Navigator >
    )
}


function MyTabs({ navigation }) {
    return (
        <Tab.Navigator initialRouteName='Discover'>
            <Tab.Screen name="Discover" component={HomeStacks} options={{headerShown:false}}


            // options={{
            //     tabBarShowLabel: false,
            //     headerMode: 'float',
            //     headerTitle: "Discover",
            //     headerTitleAlign: 'center',
            //     headerShown: true,




            //     headerLeft: () =>
            //         <TouchableOpacity onPress={() => { navigation.navigate('SettingHome') }} style={{ justifyContent: 'center', marginLeft: 10 }}>
            //             <Image source={require('../assets/images/menu.png')} style={{ height: 30, width: 30 }} resizeMode={'contain'} />
            //         </TouchableOpacity>,

            //     headerRight: () =>
            //         <View style={{ height: 40, width: 40, backgroundColor: 'gray', borderRadius: 300, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
            //             <Image source={require('../assets/images/profilepic.png')} style={{ height: 40, width: 40 }} resizeMode={'contain'} />
            //         </View>,

            //     tabBarIcon: () => {

            //         return (
            //             <View style={{ alignItems: 'center', justifyContent: 'center' }}>


            //                 <Image
            //                     source={require('../assets/images/home.png')}
            //                     resizeMode='contain'
            //                     style={{ width: 25, height: 25 }}

            //                 />



            //             </View>

            //         )

            //     },


            // }}


            />




            <Tab.Screen name="Map" component={Map}
                options={{
                    tabBarShowLabel: false,
                    headerMode: 'float',
                    headerTitle: "Find in map",
                    headerTitleAlign: 'center',
                    headerShown: true,

                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { }} style={{ justifyContent: 'center', marginLeft: 10 }}>
                            <Image source={require('../assets/images/goback.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                        </TouchableOpacity>,

                    headerRight: () =>
                        <View style={{ height: 40, width: 40, backgroundColor: 'gray', borderRadius: 300, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/images/profilepic.png')} style={{ height: 40, width: 40 }} resizeMode={'contain'} />
                        </View>,

                    tabBarIcon: () => {

                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>


                                <Image
                                    source={require('../assets/images/location.png')}
                                    resizeMode='contain'
                                    style={{ width: 25, height: 25 }}

                                />



                            </View>

                        )

                    },

                }} />


            <Tab.Screen name="Chat" component={Chat}
                options={{
                    tabBarShowLabel: false,
                    headerMode: 'float',
                    headerTitle: "Chat",
                    headerTitleAlign: 'center',
                    headerShown: true,
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.navigate() }} style={{ justifyContent: 'center', marginLeft: 10 }}>
                            <Image source={require('../assets/images/goback.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                        </TouchableOpacity>,

                    headerRight: () =>
                        <View style={{ height: 40, width: 40, backgroundColor: 'gray', borderRadius: 300, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/images/profilepic.png')} style={{ height: 40, width: 40 }} resizeMode={'contain'} />
                        </View>,

                    tabBarIcon: () => {

                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>


                                <Image
                                    source={require('../assets/images/heart.png')}
                                    resizeMode='contain'
                                    style={{ width: 25, height: 25 }}

                                />



                            </View>

                        )

                    },

                }} />
            <Tab.Screen name="HeartNoti" component={HeartNotification}
                options={{
                    tabBarShowLabel: false,
                    headerMode: 'float',
                    headerTitle: "Chat",
                    headerTitleAlign: 'center',
                    headerShown: true,
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => { navigation.navigate() }} style={{ justifyContent: 'center', marginLeft: 10 }}>
                            <Image source={require('../assets/images/goback.png')} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                        </TouchableOpacity>,

                    headerRight: () =>
                        <View style={{ height: 40, width: 40, backgroundColor: 'gray', borderRadius: 300, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../assets/images/profilepic.png')} style={{ height: 40, width: 40 }} resizeMode={'contain'} />
                        </View>,

                    tabBarIcon: () => {

                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>


                                <Image
                                    source={require('../assets/images/text.png')}
                                    resizeMode='contain'
                                    style={{ width: 25, height: 25 }}

                                />



                            </View>

                        )

                    },

                }}

            />



        </Tab.Navigator>
    );
}

export default MyTabs