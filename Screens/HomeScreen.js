  
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

export class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../img/home.jpg')} style={styles.background}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    
                    <View style={styles.main}>
                        <Image
                            style={styles.logo}
                            source={require('../img/pokemon.png')}
                        />
                       
                        <Text
                            style={styles.texto}>Esta es una App donde podrás ver algunas de las caracteristicas de tus 
                            pokemon favoritos
                        </Text>
                        <StatusBar style="auto" />
                    </View>
                    
                </ScrollView>
                </ImageBackground>
                <View style={styles.footer}>
                    <Text style={styles.textFooter}>© Daiana Romero App - 2020</Text>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    background: {
        flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    logo: {
        height: 130,
        width: 370,
        marginBottom: 150,
        marginTop: 40,
    },
    texto: {
        justifyContent: 'center',
        textAlign: 'center',
        color: "white",
        fontSize: 15,
        marginTop : -30
        //backgroundColor: 'black'
    },
    footer: {
        backgroundColor: 'black',
    },
    textFooter: {
        color: 'white',
        textAlign: 'center'
    },
});