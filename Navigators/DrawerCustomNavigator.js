import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import {HomeScreen} from "../Screens/HomeScreen";
import {InfoScreen} from "../Screens/InfoScreen";
import {SuerteScreen} from "../Screens/SuerteScreen";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(HomeScreen,SuerteScreen, InfoScreen);

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props}  />}
                onLogout={() => this.setLogout()}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Info" component={InfoScreen} />
                <Drawer.Screen name="Suerte" component={SuerteScreen} />
            </Drawer.Navigator>
        );
    }
    
}
