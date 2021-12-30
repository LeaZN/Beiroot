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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    return (






      

      <View style={styles.container}>









        <Image style={styles.image} source={require("../../assets/beiroot-logos.png")} />
   
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#000"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={styles.loginBtn} onPress={() => props.navigation.navigate('Search')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>


        <Text style={styles.not_registered_button}>Not registered?</Text>

        <TouchableOpacity style={styles.signUp} onPress={() => props.navigation.navigate('SignUp')}>
        
        <Text style={styles.signup_button}>Sign Up</Text>
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
        justifyContent: "center",
      },
     
      image: {
        
        width: 400,
        height:175,
        
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
     
      forgot_button: {
        height: 30,
        marginBottom: 15,
      },
     
      loginBtn: {
        width: "25%",
        borderRadius: 2,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "rgb(7,106,225)",
      },
      loginText:{
      color: "#fff",
      },
      not_registered_button: {
        height: 25,
        marginTop: 30,



      }

});


export default SignInScreen;