import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {InfoScreen} from "../Screens/InfoScreen";
import {SuerteScreen} from "../Screens/SuerteScreen";

const Drawer = createDrawerNavigator();

export class DrawerDefaultNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Info" component={InfoScreen} />
                <Drawer.Screen name="Suerte" component={SuerteScreen} />
            </Drawer.Navigator>
        );
    }
    
}