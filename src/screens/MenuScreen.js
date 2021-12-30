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
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 








const MenuScreen = props => {

    
   
    return (






      

      <View style={styles.container}>


<TouchableOpacity style={styles.titleTouch} onPress={() => props.navigation.navigate('Search')}>
<Ionicons name="md-search" size={24} color="gray" />  
  <Text style={styles.title}> Discover </Text>  
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
    </TouchableOpacity>


    <TouchableOpacity style={styles.titleTouch} onPress={() => props.navigation.navigate('Bookmarks')}>
    <AntDesign name="hearto" size={24} color="gray" />
        <Text style={styles.title}> My Bookmarks </Text>  
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
    </TouchableOpacity>



    <View
  style={{
    borderBottomColor: 'rgb(175,175,175)',
    borderBottomWidth: 0.5,
    width: '85%',
    alignSelf: 'flex-end', 
marginVertical: 10, }}
/>

    <TouchableOpacity style={styles.titleTouch} onPress={() => props.navigation.navigate('MyProfile')}>
    <FontAwesome name="user-o" size={24} color="gray" />
        <Text style={styles.title}> My profile </Text>  
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
    </TouchableOpacity>

   

    <TouchableOpacity style={styles.titleTouch} onPress={() => props.navigation.navigate('MyListings')}>
    <Ionicons name="list-circle-outline" size={24} color="gray" />
            <Text style={styles.title}> My Listings </Text>  
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
    </TouchableOpacity>

    <View
  style={{
    borderBottomColor: 'rgb(175,175,175)',
    borderBottomWidth: 0.5,
width: '85%',
alignSelf: 'flex-end', 
marginVertical: 10, 
}}
/>
    
    <TouchableOpacity style={styles.titleTouch} onPress={() => props.navigation.navigate('')}>
    <SimpleLineIcons name="settings" size={24} color="gray" />
        <Text style={styles.title}> App Settings </Text>  
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
    </TouchableOpacity>

  
      </View>
    );


};


const styles = StyleSheet.create ({

    title:{
fontSize: 20,
alignSelf: 'center',

    },

    titleTouch: {
            justifyContent: 'space-between',
            flexDirection: 'row',
marginVertical: 10,
marginHorizontal: 10,

    },
    container:{
        marginVertical: 30
    }

});


export default MenuScreen;