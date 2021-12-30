import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 



const MyListingsScreen = props => {


    return <View>
          <View style={styles.profileMyListingsContainer}>
       <TouchableOpacity style={styles.profileMyListings} onPress={() => props.navigation.navigate('Create')}>
           <Text style={styles.profileMyListingsText}> Add new listing </Text>
           <Octicons name="diff-added" size={24} color="black" />

       </TouchableOpacity>

        </View>


        <View style={styles.listingContainer}>
             <TouchableOpacity onPress={() => props.navigation.navigate('')}>
             <Image style={styles.listing} source={require("../../assets/Post6.png")} />
             </TouchableOpacity>




            <View style={styles.details1}>
             <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
             <Image style={styles.profileImage} source={require("../../assets/beiroot.png")} />
             </TouchableOpacity>
             <Text> Lea, </Text>
             <Text> 32</Text>
             </View>
             <View style={styles.details2}>

             <Text> Private Room | </Text>
             <Text> Greater Beirut Area, Lebanon </Text>

             </View>

             <View style={styles.details3}>

            <Text style={styles.title}>  Room for rent in calm neighbourhood </Text>
            <Text style={styles.price}> 1,000,000 LBP/Month </Text>

            </View>
            <TouchableOpacity style={styles.profileButton} onPress={() => props.navigation.navigate('')}>
    <Text style={styles.profileButtonText}> Remove </Text>
    </TouchableOpacity>
            

    </View>

    </View>
};


const styles = StyleSheet.create ({

    profileMyListingsContainer:{
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        marginHorizontal: 10,
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
    },

    listingContainer:{

        // marginVertical: 50,
    
        },
    
        listing:{
        width: 340,
        height:250,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 10,
        padding: 10,
        
        
        },
    
        details1:{
    
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        },
        details2:{
    
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        details3:{
    
           
            margin: 20,
            justifyContent: 'flex-start',
            
            
        },
    
        profileImage: {
            // marginVertical:15,
            borderRadius: 50,
            width: 40,
            height: 40,
            marginHorizontal: 16,
        
        },
        title: {
            fontSize: 20,
            marginLeft: -6,
        },
        price: {
            fontWeight: 'bold',
            fontSize: 16,
            marginVertical: 5,
            marginLeft: -2,

        },
        lineStyle:{
            borderWidth: 0.5,
            borderColor:'gray',
            marginHorizontal: 50,
            marginBottom: 20
       },
       profileButton: {
    
        borderRadius: 10,
        margin: 10,
        backgroundColor: "rgb(170,20,20)",
        paddingTop: 6,
        height: 35,
    
    },
    profileButtonText: {

        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    },
    
    


});


export default MyListingsScreen;