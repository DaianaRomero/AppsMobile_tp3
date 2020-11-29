
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Image, Button, ListItem, ImageBackground } from 'react-native';

export class SuerteScreen extends Component {

      state = {
    
        response: [],
        estado: null
    
       }
        
        handlerBuscar(t){
        
          var buscar = t.toLowerCase();
          this.setState({value : buscar });
        
        }
        
    
    
    consultarApiRandom(){
    
      var aleatorio=Math.round(Math.random()*100)+1;
        axios.get("https://pokeapi.co/api/v2/pokemon/"+ aleatorio
        )
        .then(
          dato => {
            console.log( dato.data);
      
            this.setState({
              response: dato.data,
              estado: true
             
            })
            console.log(this.state)
       })
    
    
    }
    
    
    
    
    
    
    
      
    render(){
    
    
      if(this.state.estado !== true){
        return (
          <View style={styles.container}>
              <ImageBackground source={require('../img/fondo.jpg')} style={styles.background}>
                  <View style={styles.separator} >
                    <Text style={styles.Titulo} >¡Déjalo a la suerte!</Text >
                      <Button  type="button" title="Buscar" onPress={this.consultarApiRandom.bind(this)}/>
                    </View>
              </ImageBackground>
              
              <View style={styles.footer}>
                  <Text style={styles.textFooter}>© Daiana Romero App - 2020</Text>
              </View>
                 
         </View>
        );
    
        }else if(this.state.estado === true) {
        return (
          <View style={styles.container}>
            <ImageBackground source={require('../img/fondo.jpg')} style={styles.background}>
              <View style={styles.separator} >
                <Text style={styles.Titulo} >¡Déjalo a la suerte!</Text >
                  <Button  type="button" title="Buscar" onPress={this.consultarApiRandom.bind(this)}/>
              </View>
             <View style={styles.ApiDatosBusqueda}>
               <Text style={styles.texto}>Tu pokemon elegido es</Text>
                <Text style={styles.texto2}>{this.state.response.name}</Text>
               <Image style={{height: 250, width: 250}} source={{uri: this.state.response.sprites.front_default}}/>
                
               <Text style={styles.texto}>Habilidades:</Text>
               {this.state.response.abilities.map(item => (
                         <Text style={styles.texto} key={item.ability.name}>
                           {item.ability.name} 
                         </Text>
                       ))}
                   
                   
              </View>
                   
            </ImageBackground>

            <View style={styles.footer}>
                   <Text style={styles.textFooter}>© Daiana Romero App - 2020</Text>
            </View>
              
          </View>
        );
    }  
    }    
}
    
  
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
},
  background: {
    flex: 1,
resizeMode: "cover",
justifyContent: "center"
},
  App:{
    justifyContent: "center",
    
  },
  Titulo:{
    
    textAlign: "center",
    marginTop: 5,
    marginBottom: 25,
    fontWeight: "bold",
    fontSize: 20,
  },
  separator:{
    marginHorizontal:50
  },
  footer: {
    backgroundColor: 'black',
},

textFooter: {
    color: 'white',
    textAlign: 'center'
},
  separator2:{
    marginHorizontal:30
  },
  ApiDatosBusqueda:{
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 60
  },
  texto:{
    fontSize: 15
  },
  texto2:{
    fontSize: 17,
    fontWeight: "bold"
  }
});
 










     










