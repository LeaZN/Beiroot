import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Listing from '../components/Listing';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 




const SearchScreen = props => {


    const [results, setResults] = useState ([]);
    

    

    return (

        <View>


        <View style={styles.container}>

        <TouchableOpacity style={styles.menuIcon} onPress={() => props.navigation.navigate('Menu')}>
        <Entypo name="menu" size={34} color="black" />
        </TouchableOpacity>

       

         <Image style={styles.image} source={require("../../assets/beiroot_black.png")} />
        

         <TouchableOpacity style={styles.bookmarkIcon} onPress={() => props.navigation.navigate('Bookmarks')}>
         <Feather name="bookmark" size={30} color="black" />
         </TouchableOpacity>
         </View>

       
         <ScrollView>

        <Listing />
       

        </ScrollView>

        
        
         </View>

    );
};


const styles = StyleSheet.create ({

    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        height: 85,
        // borderBottomWidth:1,
        // borderBottomColor: 'rgb(130,130,10)'
    },

    image: {
        width: 200,
        height: 40,
       
        // marginTop: 20,
        padding: 75,
    },
    menuIcon:{
        paddingTop: 40,
        paddingLeft: 10
    },
    bookmarkIcon:{
        paddingTop: 43,
        paddingRight: 10

        
        
    },
  


});


export default SearchScreen;