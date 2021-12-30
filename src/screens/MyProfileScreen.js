import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Linking, Platform, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 




const ProfileScreen = props => {



   
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
            <View style={styles.profileTitle}>
        <Text style={styles.profileTitleText}> Lea's Profile </Text>
        <TouchableOpacity >
        <Feather style={styles.profileTitleButton} name="edit-2" size={24} color="black" onPress={() => props.navigation.navigate('EditProfile')}/>
        </TouchableOpacity>
        </View>
        <View style={styles.profileGeneral}>
        <Image style={styles.profileImage} source={require("../../assets/beiroot.png")} />
        <View style={styles.profileDetails}>
        <Text style={{fontSize: 22}}> Lea</Text>
        <Text style={{fontSize: 18}}> 32,</Text>
        <Text> Beirut, Lebanon</Text>
       
   
        </View>
        </View>



        <View style={styles.profileMyListingsContainer}>
       <TouchableOpacity style={styles.profileMyListings} onPress={() => props.navigation.navigate('MyListings')}>
           <Text style={styles.profileMyListingsText}> My listings </Text>
           <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />

       </TouchableOpacity>

        </View>

        <View style={styles.profileLanguages}>
        <Text style={styles.languagesText}>Languages I speak</Text>
        <Text style={styles.languagesText2}>Arabic, English, French</Text>

        </View>
        
        <View style={styles.profileAbout}>
        <Text style={styles.aboutText}> About me </Text>
        <Text style={styles.languagesText2}>Hi there, I'm Lea. 
         I love to travel, explore new cultures, 
        meet random people and enjoy life.
        I am known to be very sociable, and I'm always smiling. 
        For me, strangers are always new friends who I have not met yet!
        </Text>
        </View>
        <View style={styles.profilePhone}>
        <Text style={styles.aboutText}> Contact me </Text>
        <Text style={styles.languagesText2}> +961 70 791863</Text>

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
profileTitleButton:{

    marginRight: 15,

},

profileMyListingsContainer:{
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 8,

},

profileMyListings:{
    flexDirection:'row',
    padding: 20,
    justifyContent: 'space-between',
   
},

profileMyListingsText:{

    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
}


});


export default ProfileScreen;