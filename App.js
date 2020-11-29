import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./Screens/LoginScreen";
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import {HomeScreen} from "./Screens/HomeScreen";
import {InfoScreen} from "./Screens/InfoScreen";
import {SuerteScreen} from "./Screens/SuerteScreen";
import {DrawerContentScreen} from "./Screens/DrawerContentScreen";
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';



const Drawer = createDrawerNavigator();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
    }
  }

  setLogin() {
    this.setState({ isLoggedIn: true });
  }

  setLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {

    let screen;
    if (this.state.isLoggedIn) {
      screen =
        <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName="Home"
            headerMode={'none'}
            drawerContent={props => <DrawerContentScreen {...props} onLogout={() => this.setLogout()}/>}
            >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Info" component={InfoScreen} />
            <Drawer.Screen name="Suerte" component={SuerteScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
    } else {
      screen = <LoginScreen onLogin={() => this.setLogin()} />
    }

    return screen;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484848',
    alignItems: 'center',
    justifyContent: 'center',
  },
});