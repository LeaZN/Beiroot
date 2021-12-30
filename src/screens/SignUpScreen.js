import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


const SignInScreen = props => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
   
   
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/beiroot-logos.png")} />
   
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#000"
            autoCorrect= {false}
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#000"
            autoCorrect= {false}
            autoCapitalize= "none"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
            autoCorrect= {false}
            autoCapitalize= "none"
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#000"
            autoCorrect= {false}
            onChangeText={(confirm) => setConfirm(confirm)}
          />
        </View>

   
        <TouchableOpacity style={styles.registerBtn} onPress={() => props.navigation.navigate('Search')}>
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>


        
        
       
      </View>
    );

    ///autocorrect and autocapitalize false in textinput

};


const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "center",
       
      },
     
      image: {
        
        width: 350,
        height:200,
        marginTop: 35,
        marginBottom: 5,
        
      },
     
      inputView: {
        // backgroundColor: "rgb(7,106,225)",
        borderRadius: 2,
        width: "70%",
        height: 45,
        marginBottom:10,
        borderWidth:1,
        borderColor:  "#000",
        alignItems: "center",
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        
      },
     
   
     
      registerBtn: {
        width: "25%",
        borderRadius: 2,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "rgb(7,106,225)",
        marginTop: 20,
        },


        loginText:{
        color: "#fff",
        },


   

});


export default SignInScreen;