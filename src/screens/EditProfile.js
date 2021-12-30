import React, { useState }from "react";
import { View, Text, StyleSheet, Image, ScrollView, Linking, Platform, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 






const ProfileScreen = props => {

    const [name, setName] = useState(' Lea');


    return  <ScrollView>
            <View>
            <View style={styles.profileTitle}>
        <Text style={styles.profileTitleText}> Lea's Profile </Text>
        <TouchableOpacity  onPress={() => props.navigation.navigate('MyProfile')}>
        <MaterialIcons  style={styles.profileSave} name="done" size={30} color="teal" />
        </TouchableOpacity>
      
        </View>
        <View style={styles.profileGeneral}>
        <Image style={styles.profileImage} source={require("../../assets/beiroot.png")} />
        <TouchableOpacity style={styles.changeImage}>
        <FontAwesome name="camera" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.profileDetails}>
        <TextInput  
        autoCorrect={false} 
        style={styles.profileNameInput} 
        value= {name} 
        onChangeText={(newName)=> setName(newName)}/>
        <TextInput style={styles.profileAgeInput} value=' 32,'/>
        <TextInput autoCorrect ={false} style={styles.profileLocationInput} value= " Beirut, Lebanon"/>
        </View>
        </View>

        <View style={styles.profileLanguages}>
        <Text style={styles.languagesText}>Languages I speak</Text>
        <TextInput style={styles.languagesText2} value=" Arabic, English, French" />

        </View>
        
        <View style={styles.profileAbout}>
        <Text style={styles.aboutText}> About me </Text>
        <TextInput style={styles.languagesText2} value="Hi there, I'm Lea. 
         I love to travel, explore new cultures, 
        meet random people and enjoy life.
        I am known to be very sociable, and I'm always smiling. 
        For me, strangers are always new friends who I have not met yet!"/>
        </View>
        <View style={styles.profilePhone}>
        <Text style={styles.aboutText}> Contact me </Text>
        <TextInput style={styles.languagesText2} value=" +961 70 791863"/>

     

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
    opacity: 0.5

},
languagesText:{
margin:20,
    fontWeight: "bold",
    fontSize: 16,
},



aboutText:{
    margin: 20,
    fontWeight: 'bold',
    fontSize: 16,
},
profileTitleText:{
    fontSize: 25,
    marginHorizontal: 10,
    fontWeight: 'bold',
},
profileTitle:{

    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical: 15


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
    top: 50,
    left: -10,
},
phoneButton:{
position: 'absolute',
right: 30,
top: 40,

},
editProfile:{
backgroundColor: 'rgb(150,20,250)',
marginVertical: 10,
},
viewListings:{
    backgroundColor: 'rgb(15,100,255)',
},




profileNameInput:{
   fontSize: 22,
   borderColor: 'gray',
   borderWidth: 1,
   color: 'black',
//    marginVertical: 4,
borderRadius: 3,

},

profileAgeInput:{
fontSize: 18,
borderColor: 'gray',
borderWidth: 1,
   color: 'black',
   marginVertical: 4,
   borderRadius: 3,



},

profileLocationInput:{
    borderColor: 'gray',
    borderWidth: 1,
   color: 'black',
   borderRadius: 3,


},
languagesText2:{
    marginLeft:20,
    marginBottom:20,
    borderColor: 'gray',
    borderWidth: 1,
   color: 'black',
   padding: 3,
   marginRight: 20,
   borderRadius: 3,

},

profileSave:{
    marginRight: 15,
},
changeImage:{

    position: 'absolute',
    left: 130,
    top: 130,
    backgroundColor: 'teal',
    width: 40,
    height:40,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 50,

}


});


export default ProfileScreen;