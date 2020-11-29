import React, { Component } from 'react';
import { StyleSheet, ScrollView,Text, View, Button, ImageBackground } from 'react-native';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component {

    async _signInWithGoogle() {

        try {
            const result = await Google.logInAsync({
              androidClientId: "159715085014-i716gk4m93mikm2jf14c0bohmhl3sfq5.apps.googleusercontent.com",
               scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                try {
                   this.setState({
                        name: result.user.name,
                    })
                    console.log(this.state.name);
                    this.props.onLogin();
                } catch (error) {
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render() {
        return (
            
            <View style={styles.container}>
                <ImageBackground source={require('../img/pikachu2.jpg')} style={styles.background}>
                <View style={styles.main}>
                    <View style={styles.button}>
                        <Button
                            onPress={() => this._signInWithGoogle()}
                            title="Iniciar sesión con Google"
                        />
                    </View>
                    </View>
                    </ImageBackground> 
            </View>
            
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        flexDirection: 'column',
        width: 360,
        height: undefined,
    },
    button: {
        alignItems: "center"
       
    }
});