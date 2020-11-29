
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput,ImageBackground, Image, Button, ListItem } from 'react-native';

export class InfoScreen extends Component {

      state = {
    
        response: [],
        estado: null
    
       }
        
        handlerBuscar(t){
        
          var buscar = t.toLowerCase();
          this.setState({value : buscar });
        
        }
        
    
    
    
    
    
    
    
    consultarApi(){
    
      var buscar = this.state.value;
     
     if(buscar === null ){
      axios.get("https://pokeapi.co/api/v2/pokemon/"
      )
      .then(
        dato => {
          console.log( dato.data);
    
          this.setState({
            response: dato.data,
            estado: true
            
          })
          console.log(this.state)
    
        });
    
     
      
      }else{
    
      axios.get("https://pokeapi.co/api/v2/pokemon/"+buscar)
      .then(
        dato => {
          console.log( dato.data);
    
          this.setState({
            response: dato.data,
            estado: true
           
          })
          console.log(this.state)
    
        });
      }
    }
    
    
    
      
    render(){
    
    
      if(this.state.estado !== true){
        return (
          <View style={styles.container}>
              <ImageBackground source={require('../img/fondo.jpg')} style={styles.background}>
                 <View style={styles.separator} >
                    <Text style={styles.Titulo}>¡Elige tu pokemon!</Text>
                    <TextInput  style={styles.input}  placeholder='Ej: Pikachu'   onChangeText={this.handlerBuscar.bind(this)}/>
                    <Button type="button" title="Buscar" onPress={this.consultarApi.bind(this)}/>
                  </View>
              </ImageBackground>
              <View style={styles.footer}>
                 <Text style={styles.textFooter}>© Daiana Romero App 2020</Text>
              </View>   
           </View>
        );
    
        }else if(this.state.estado === true) {
        return (
       
       <View style={styles.container}>
          <ImageBackground source={require('../img/fondo.jpg')} style={styles.background}>
            <View style={styles.separator} >
              <Text style={styles.Titulo2}>¡Elige tu pokemon!</Text>
                <TextInput  style={styles.input}  placeholder='Ej: Pikachu'  onChangeText={this.handlerBuscar.bind(this)}/>
                <Button type="button" title="Buscar" onPress={this.consultarApi.bind(this)}/>
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
    input: {
      height: 40,
      borderColor: '#9ff',
      backgroundColor: 'white',
      borderWidth: 3,
      marginBottom: 15
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
      Titulo2:{
        
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 20,
      },
      texto2:{
        fontSize: 17,
        fontWeight: "bold"
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
      }
    });
     










