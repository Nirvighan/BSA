import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert,TextInput } from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import WelcomeScreen from './WelcomeScreen';

export default class SignUpScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            contact:'',
            address:'',
            emailAddress:'',
            password:'',
            confirmPassword:'',
        }
    }

    UserSignUp = (emailAddress,password,confirmPassword) => {
        if(this.state.password!==this.state.confirmPassword)
        {
          return Alert.alert("Password doesn't match");
        }
        else{
console.log("hello");
          firebase.auth().createUserWithEmailAndPassword(emailAddress,password).then(() => {
              db.collection('users').add({
                  "first_name":this.state.firstName,
                  "last_name":this.state.lastname,
                  "contact":this.state.contact,
                  "email_id":this.state.emailAddress,
                  "address":this.state.address,
                  
              });
              
               Alert.alert("User added successfully");
          })
          .catch((function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        }))
    }
    }

   
        
   
        

    render(){
        return(
            <View style = {styles.screen}>
             <Text style = {styles.heading}>PLEASE FILL THE BELOW INFORMATION TO SIGN UP</Text>  
             <TextInput
              style = {styles.textBox}
              placeholder = "First Name"
              maxLength = {12}
              onChangeText = {(text) => {
                  this.setState = ({
                      firstName:text
                  })
              }}
              
   
             />
             

<TextInput
              style = {styles.textBox}
              placeholder = "Last Name"
              maxLength = {12}
              onChangeText = {(text) => {
                  this.setState = ({
                      lastName:text
                  })
              }}
             />

<TextInput
              style = {styles.textBox}
              placeholder = "Contact"
              keyboardType = {'numeric'}
            maxLength = {10}
              onChangeText = {(text) => {
                  this.setState = ({
                      contact:text
                  })
              }}
             />

<TextInput
              style = {styles.textBox}
              placeholder = "Address"
              multiline = {true}
              onChangeText = {(text) => {
                  this.setState = ({
                       address:text
                  })
              }}
             />

<TextInput
              style = {styles.textBox}
              placeholder = "Email Address"
              keyboardType = {"email-address"}
              onChangeText = {(text) => {
                  this.setState = ({
                      emailAddress:text
                  })
              }}
             />

<TextInput
              style = {styles.textBox}
              placeholder = "Password"
              
              onChangeText = {(text) => {
                  this.setState = ({
                      password:text
                  })
              }}
             />

<TextInput
              style = {styles.textBox}
              placeholder = "Confirm Password"
              
              onChangeText = {(text) => {
                  this.setState = ({
                      confirmPassword:text
                  })
              }}
             />

             <TouchableOpacity
            style = {styles.button}
            onPress = {() => {
               
                this.props.navigation.navigate('WelcomeScreen');
                this.UserSignUp(this.state.emailAddress,this.state.password,this.state.confirmPassword);
    }
            }
             >
                 <Text style = {styles.buttonText}>Sign Up</Text>
             </TouchableOpacity>
            </View>
            
        )
        
    }
    
}




const styles = StyleSheet.create({
    screen:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#4A148C',
        flex:1

    },

    heading:{
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:30,
        color:'#fff'
    },

    textBox:{
        width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#fff',
      fontSize: 20,
      alignSelf:'center',
      color:'#fff'
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
    }

    
})