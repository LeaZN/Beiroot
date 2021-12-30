import React, { useState }from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons'; 



const Listing = props => {


 
    

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
    <FontAwesome style={styles.bookmarkIcon} name="bookmark" size={24} color=  "rgb(0,100,100)"/>
    </TouchableOpacity>

             </View>
             <View style={styles.details2}>

             <Text> Private Room | </Text>
             <Text> Greater Beirut Area, Lebanon </Text>

             </View>

             <View style={styles.details3}>

            <Text style={styles.title}> Listing Title </Text>
            <Text style={styles.price}> 150$/Month </Text>

            </View>
            <View style={styles.lineStyle}/>




<View>


<TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post2.png")} />
             </TouchableOpacity>




            <View style={styles.details1}>
             <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
             <Image style={styles.profileImage} source={require("../../assets/profilePicture2.png")} />
             </TouchableOpacity>
             <Text> Lynn, </Text>
             <Text> 34</Text>


             <TouchableOpacity style={styles.profileButton} onPress={() => props.navigation.navigate('Profile')}>
    <Text style={styles.profileButtonText}> View Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => toggleFunction()}>
    <FontAwesome style={styles.bookmarkIcon} name="bookmark" size={24} color=  "rgb(0,100,100)"/>
    </TouchableOpacity>

             </View>
             <View style={styles.details2}>

             <Text> Entire Apt. | </Text>
             <Text> Ashrafieh, Beirut</Text>

             </View>

             <View style={styles.details3}>

            <Text style={styles.title}> Listing Title </Text>
            <Text style={styles.price}> 300$/Month </Text>

            </View>
            <View style={styles.lineStyle}/>

</View>





<View>


<TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post3.png")} />
             </TouchableOpacity>




            <View style={styles.details1}>
             <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
             <Image style={styles.profileImage} source={require("../../assets/profilePicture3.png")} />
             </TouchableOpacity>
             <Text> Adnan, </Text>
             <Text> 31</Text>


             <TouchableOpacity style={styles.profileButton} onPress={() => props.navigation.navigate('Profile')}>
    <Text style={styles.profileButtonText}> View Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => toggleFunction()}>
    <FontAwesome style={styles.bookmarkIcon} name="bookmark" size={24} color=  "rgb(0,100,100)"/>
    </TouchableOpacity>


             </View>
             <View style={styles.details2}>

             <Text> Entire Apt. | </Text>
             <Text> Gemmayzeh, Beirut</Text>

             </View>

             <View style={styles.details3}>

            <Text style={styles.title}> Listing Title </Text>
            <Text style={styles.price}> 350$/Month </Text>

            </View>
            <View style={styles.lineStyle}/>

</View>





<View>


<TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post4a.png")} />
             </TouchableOpacity>




            <View style={styles.details1}>
             <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
             <Image style={styles.profileImage} source={require("../../assets/profilePicture4.png")} />
             </TouchableOpacity>
             <Text> Jana, </Text>
             <Text> 29</Text>


             <TouchableOpacity style={styles.profileButton} onPress={() => props.navigation.navigate('Profile')}>
    <Text style={styles.profileButtonText}> View Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => toggleFunction()}>
    <FontAwesome style={styles.bookmarkIcon} name="bookmark" size={24} color=  "rgb(0,100,100)"/>
    </TouchableOpacity>


             </View>
             <View style={styles.details2}>

             <Text> Entire Apt. | </Text>
             <Text> Sodeco, Beirut</Text>

             </View>

             <View style={styles.details3}>

            <Text style={styles.title}> Listing Title </Text>
            <Text style={styles.price}> 250$/Month </Text>

            </View>
            <View style={styles.lineStyle}/>

</View>



<View>


<TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post5a.png")} />
             </TouchableOpacity>




            <View style={styles.details1}>
             <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
             <Image style={styles.profileImage} source={require("../../assets/profilePicture5.png")} />
             </TouchableOpacity>
             <Text> Daniel, </Text>
             <Text> 28</Text>


             <TouchableOpacity style={styles.profileButton} onPress={() => props.navigation.navigate('Profile')}>
    <Text style={styles.profileButtonText}> View Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => toggleFunction()}>
    <FontAwesome style={styles.bookmarkIcon} name="bookmark" size={24} color=  "rgb(0,100,100)"/>
    </TouchableOpacity>


             </View>
             <View style={styles.details2}>

             <Text> Entire Apt. | </Text>
             <Text> Port Area, Beirut</Text>

             </View>

             <View style={styles.details3}>

            <Text style={styles.title}> Listing Title </Text>
            <Text style={styles.price}> 190$/Month </Text>

            </View>
            <View style={styles.lineStyle}/>

</View>

    </View>








};


const styles = StyleSheet.create ({



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
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5,
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'gray',
        marginHorizontal: 50,
        marginBottom: 20
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


export default withNavigation (Listing);