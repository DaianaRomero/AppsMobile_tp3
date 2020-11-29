import React, {Component} from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {View, StyleSheet} from "react-native";
import { Icon } from 'react-native-elements'

export class DrawerContentScreen extends Component {

    handlerConfiguration(){
        console.log("Configuration");
    }

    handlerLogout(){
        this.props.onLogout();
    }

    render(){

        return(
            <View style={styles.container}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="home-outline" color='#000000' style={styles.icon}/>}
                            label="Home"
                            onPress={() => this.props.navigation.navigate("Home")}
                        />
                       
                        <DrawerItem 
                            icon={() => <Icon type="Ionicons" name="search" color='#000000' style={styles.icon}/>}
                            label="Elige tu pokemon"
                            onPress={() => this.props.navigation.navigate("Info")}
                        />
                         <DrawerItem 
                            icon={() => <Icon type="Ionicons" name="search" color='#000000' style={styles.icon}/>}
                            label="Déjalo a la suerte"
                            onPress={() => this.props.navigation.navigate("Suerte")}
                        />
                    </View>
                </DrawerContentScrollView>
                <View style={styles.bottomDrawer}>
                    <DrawerItem 
                        icon={() => <Icon type="material-community" name="cogs" style={styles.icon}/>}
                        label="Configuration"
                        onPress={() => this.handlerConfiguration()}
                    />
                    <DrawerItem 
                        icon={() => <Icon type="material-community" name="logout" style={styles.icon}/>}
                        label="Logout"
                        onPress={() => this.handlerLogout()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    icon:{
        marginLeft: 5,
        justifyContent: 'center',
    },
    topDrawer:{
        flex:1   
    },
    bottomDrawer: {
        flex:-1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    }
});