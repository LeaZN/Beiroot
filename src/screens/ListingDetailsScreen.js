import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 



const ListingDetailsScreen = props => {

    const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
      setToggle(!toggle);
 };
    return <View style={styles.listingContainer}>
    <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
    <Image style={styles.listing} source={require("../../assets/Post1.png")} />
    </TouchableOpacity>


   




   <View style={styles.details1}>
    <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
    <Image style={styles.profileImage} source={require("../../assets/profilePicture.png")} />
    </TouchableOpacity>
    <Text> Marc, </Text>
    <Text> 28</Text>
    
    <TouchableOpacity style={styles.profileButton} onPress={() => props.navigation.navigate('Profile')}>
    <Text style={styles.profileButtonText}> View Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => toggleFunction()}>
    <FontAwesome style={styles.bookmarkIcon} name="bookmark" size={24} color= {toggle ? "rgb(0,100,100)" : "rgb(138,138,138)" }/>
    </TouchableOpacity>

    </View>
    
    <View style={styles.details2}>

    <Text> Private Room | </Text>
    <Text> Greater Beirut Area, Lebanon </Text>

    </View>

    <View style={styles.details3}>

   <Text style={styles.title}> Lovely 2-bedroom apartment </Text>
   <Text style={styles.price}> 2,000,000 LBP/Month </Text>

   </View>

   <Text style={styles.description}> Description </Text>
   <Text style={styles.descriptionDetails}> 
   This apartment has 24/7 continuous electricity.
   Newly renovated apartment centrally located in Mar Mikhael, 
    Armenia Street, where the area buzzes with heritage houses, 
    art galleries, pubs, rooftops, cafes, restaurants, 
    bakeries and shops. 
    </Text>



    


</View>
};


const styles = StyleSheet.create ({



listingContainer:{

// marginVertical: 50,

},

listing:{
width: '100%',
height:250,
alignSelf: 'center',
// marginTop: 20,
// borderRadius: 10,
// padding: 10,


},

details1:{

flexDirection: 'row',
margin: 10,
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
},

price: {
fontWeight: 'bold',
fontSize: 16,
marginVertical: 5,
},
description:{

    marginHorizontal: 20,
    fontSize: 25,
    fontWeight: 'bold',
},
descriptionDetails:{
    
    marginLeft: 24,
    marginVertical: 10,
    fontSize: 20,

},

profileButton: {
    
    alignSelf: 'flex-end', 
    borderRadius: 10,
    margin: 10,
    backgroundColor: "rgb(37,37,37)",
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 35,

},
profileButtonText: {

    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
},

bookmarkIcon:{
paddingLeft: 80,


}

});


export default ListingDetailsScreen;