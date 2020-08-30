import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert,TextInput } from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class RequestingScreen extends React.Component{

   constructor(){
       super();
       this.state = {
           itemName:'',
           reasonToRequest:'',
           userId : firebase.auth().currentUser.email,
       }

   }

   getUniqueId(){
    return Math.random().toString(36).substring(7);
   }

   addRequestedItems = (itemName,reasonToRequest) =>{
       var userId = this.state.userId;
       var uniqueId = this.getUniqueId();
       db.collection('requested_items').add({
           "user_Id":userId,
           "item_name":itemName,
           "reason_to_request":reasonToRequest,
           "request_id":uniqueId
       })

       this.setState({
           itemName:'',
           reasonToRequest:''
       })
   }

    render(){
        return(
            <View style = {styles.screen}>
               <Text style = {styles.heading}>REQUEST ITEMS HERE.</Text>
            
            
               <TextInput
                style = {styles.textBox}
                placeholder = "Item Name"
                onChangeText = {(text) => {
                    this.setState({
                        itemName:text
                    })
                }}
                value = {this.state.itemName}
               />
            
            <TextInput
                style = {styles.textBox2}
                placeholder = "Reason to request"
                multiline = {true}
                onChangeText = {(text) => {
                    this.setState({
                        reasonToRequest:text
                    })
                }}
                value = {this.state.reasonToRequest}
               />

               <TouchableOpacity
                style = {styles.button}
                onPress = {() => {
                    this.addRequestedItems(this.state.itemName,this.state.reasonToRequest);
                }}
               >
                   <Text style = {styles.buttonText}>SEND REQUEST</Text>
               </TouchableOpacity>
            
            
            
            
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:30,
        color:'#fff'
    },

    screen:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#4A148C',
        flex:1

    },

    textBox:{
        width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#fff',
      fontSize: 20,
      alignSelf:'center',
      color:'#fff',
      marginTop:30
    },

    textBox2:{
        width: 300,
      height: 120,
      borderBottomWidth: 1.5,
      borderColor : '#fff',
      fontSize: 20,
      alignSelf:'center',
      color:'#fff',
      marginTop:30
    },

    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:25,
        backgroundColor:"#fff",
        marginTop:20,
        shadowColor: "#ffffff",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.40,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText:{
        color:'#4A148C',
        fontWeight:'bold',
        fontSize:20
      },

})