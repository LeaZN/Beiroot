import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';


const Listing = props => {

    

    return <View style={styles.listingContainer}>

        <View style={styles.imagesView}>
            <ScrollView horizontal = {true} >
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post1.png")} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post1a.png")} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post1b.png")} />
             </TouchableOpacity>
             </ScrollView>





             </View>


            <View style={styles.details1}>
             <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
             <Image style={styles.profileImage} source={require("../../assets/profilePicture.png")} />
             </TouchableOpacity>
             <Text> Marc, </Text>
             <Text> 28</Text>
             </View>
             <View style={styles.details2}>

             <Text> Private Room | </Text>
             <Text> Greater Beirut Area, Lebanon </Text>

             </View>

             <View style={styles.details3}>

            <Text style={styles.title}> Lovely 2-bedroom apartment </Text>
            <Text style={styles.price}> 2,000,000 LBP </Text>

            </View>
            <View style={styles.lineStyle}/>




<View>

<View style={styles.imagesView}>
            <ScrollView horizontal = {true} >
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post2.png")} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post2a.png")} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post2b.png")} />
             </TouchableOpacity>
             </ScrollView>

</View>

            <View style={styles.details1}>
             <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
             <Image style={styles.profileImage} source={require("../../assets/profilePicture2.png")} />
             </TouchableOpacity>
             <Text> Lynn, </Text>
             <Text> 34</Text>
             </View>
             <View style={styles.details2}>

             <Text> Entire Apt. | </Text>
             <Text> Ashrafieh, Beirut</Text>

             </View>

             <View style={styles.details3}>

            <Text style={styles.title}> Beirut apartment for rent </Text>
            <Text style={styles.price}> 300$/Month </Text>

            </View>
            <View style={styles.lineStyle}/>

</View>





<View>


<View style={styles.imagesView}>
            <ScrollView horizontal = {true} >
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post3.png")} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post3a.png")} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post3b.png")} />
             </TouchableOpacity>
             </ScrollView>

</View>


            <View style={styles.details1}>
             <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
             <Image style={styles.profileImage} source={require("../../assets/profilePicture3.png")} />
             </TouchableOpacity>
             <Text> Adnan, </Text>
             <Text> 31</Text>
             </View>
             <View style={styles.details2}>

             <Text> Entire Apt. | </Text>
             <Text> Gemmayzeh, Beirut</Text>

             </View>

             <View style={styles.details3}>

            <Text style={styles.title}> Charming clean flat </Text>
            <Text style={styles.price}> 3,500,000 LBP/Month </Text>

            </View>
            <View style={styles.lineStyle}/>

</View>





<View>


<View style={styles.imagesView}>
            <ScrollView horizontal = {true} >
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post4.png")} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post4a.png")} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post4b.png")} />
             </TouchableOpacity>
             </ScrollView>

</View>


            <View style={styles.details1}>
             <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
             <Image style={styles.profileImage} source={require("../../assets/profilePicture4.png")} />
             </TouchableOpacity>
             <Text> Jana, </Text>
             <Text> 29</Text>
             </View>
             <View style={styles.details2}>

             <Text> Entire Apt. | </Text>
             <Text> Sodeco, Beirut</Text>

             </View>

             <View style={styles.details3}>

            <Text style={styles.title}> Superb flat in Beirut </Text>
            <Text style={styles.price}> 4,000,000 LBP/Month </Text>

            </View>
            <View style={styles.lineStyle}/>

</View>



<View>


<View style={styles.imagesView}>
            <ScrollView horizontal = {true} >
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post5.png")} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post5a.png")} />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => props.navigation.navigate('ListingDetails')}>
             <Image style={styles.listing} source={require("../../assets/Post5b.png")} />
             </TouchableOpacity>
             </ScrollView>

</View>



            <View style={styles.details1}>
             <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
             <Image style={styles.profileImage} source={require("../../assets/profilePicture5.png")} />
             </TouchableOpacity>
             <Text> Daniel, </Text>
             <Text> 28</Text>
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
    width: 360,
    height:250,
    alignSelf: 'center',
    marginTop: 10,
    // borderRadius: 10,
    padding: 10,
    marginRight: 10,
    
    
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
   }


});


export default withNavigation (Listing);