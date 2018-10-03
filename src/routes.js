import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, DrawerActions } from 'react-navigation';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, StatusBar } from 'react-native';

import DashHome from './components/DashHome/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import DrawerScreen from './components/Common/DrawerScreen';
import DashComponent from './components/Dash/index'
import DetailComponent from './components/Detail/index'
import NoTabComponent from './components/NoTab/index';

const Tabs = createBottomTabNavigator({
    Home: DashHome,
    Contact: Contact,
    About: About
}, {
        tabBarOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#d0d0d0',
            style: {
                backgroundColor: 'red',
            },
            indicatorStyle: {
                backgroundColor: 'blue',
            }, labelStyle: {
                backgroundColor: '#FF7933',
                fontSize: 18,
                fontWeight: '400',
                fontFamily: 'Rubik-Regular',
                padding: 16,

            }
        }
    });

const DrawerNavigator = createDrawerNavigator({
    DashHome: {
        screen: Tabs,
    },
    About: {
        screen: About
    },
    NoTab: {
        screen: NoTabComponent
    }
}, {
        initialRouteName: 'DashHome',
        contentComponent: DrawerScreen,
        drawerWidth: 300
    });

const MenuImage = ({ navigation }) => {
    if (!navigation.state.isDrawerOpen) {
        return <Image source={require('./images/menu.png')} style={{ width: 55, height: 55 }} />
    } else {
        return <Image source={require('./images/menu.png')} style={{ width: 55, height: 55 }} />
    }
}

const StackNavigator = createStackNavigator({

    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'Dash',  // Title to appear in status bar
            headerLeft:
                <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
                    <MenuImage style="styles.bar" navigation={navigation} />
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#ffffff',
                borderWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
                fontWeight: 'bold',
            },

        })

    },
    Dash: {
        screen: DashComponent
    },
    Detail: {
        screen: DetailComponent
    },
    NoTab: {
        screen: NoTabComponent
    }
}, {
        initialRouteName: 'DrawerNavigator',
    });

export default StackNavigator;
