import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Linking, Platform, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const ProfileScreen = () => {



   
    dialCall = () => {
     
        let phoneNumber = '';
     
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${+961 70 798776}';
        }
        else {
          phoneNumber = 'telprompt:${+961 70 798776}';
        }
     
        Linking.openURL(phoneNumber);
      };






    return  <ScrollView>
            <View>
        <Text style={styles.profileTitle}> Marc's Profile </Text>
        <View style={styles.profileGeneral}>
        <Image style={styles.profileImage} source={require("../../assets/profilePicture.png")} />
        <View style={styles.profileDetails}>
        <Text style={{fontSize: 22}}> Marc</Text>
        <Text style={{fontSize: 18}}> 28,</Text>
        <Text> Beirut, Lebanon</Text>
        </View>
        </View>

        <View style={styles.profileLanguages}>
        <Text style={styles.languagesText}>Languages I speak</Text>
        <Text style={styles.languagesText2}>Arabic, English, French</Text>

        </View>
        
        <View style={styles.profileAbout}>
        <Text style={styles.aboutText}> About me </Text>
        <Text style={styles.languagesText2}>Hi there, I'm Marc. 
        I'm Lebanese-Brazilian living between Beirut, 
        Larnaca and Dubai. I enjoy travelling the world and living new experiences. 
        I've been to 38 countries already and many others are on the to-do-list. 
        I've hosted tens of thousands of travelers from all over the world in my properties since 2016. 
        Please feel free to contact me if you have any questions about my listings or just for a chat.
        </Text>
        </View>
        <View style={styles.profilePhone}>
        <Text style={styles.aboutText}> Contact me </Text>
        <Text style={styles.languagesText2}> +961 70 798776</Text>

        <TouchableOpacity onPress={dialCall} activeOpacity={0.7} style={styles.phoneButton} >
        <AntDesign name="phone" size={30} color="rgb( 11,154,227)" />
        </TouchableOpacity>

        </View>
        </View>
        </ScrollView>

   
};


const styles = StyleSheet.create ({

profileGeneral:{
 borderWidth: 0.5,
 borderColor: 'gray',
 borderRadius: 10,
//  height: 200,
 marginHorizontal: 15,
 marginVertical: 8,

},
profileLanguages:{
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 8,

},
profileAbout:{
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 8,
},
profileImage:{
    width: 170,
    height: 170,
    margin: 10,
    borderRadius: 10,
},
languagesText:{
margin:20,
    fontWeight: "bold",
    fontSize: 16,
},

languagesText2:{
    marginLeft:20,
    marginBottom:20,
},

aboutText:{
    margin: 20,
    fontWeight: 'bold',
    fontSize: 16,
},
profileTitle:{
    fontSize: 25,
    marginHorizontal: 10,
    marginVertical: 10
},
profilePhone:{
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 8,
},
profileDetails: {
    marginLeft: 200,
    // borderWidth: 1,
    position: 'absolute',
    width: 100,
    top: 90,
    left: -10,
},
phoneButton:{
position: 'absolute',
right: 30,
top: 40,


}

});


export default ProfileScreen;