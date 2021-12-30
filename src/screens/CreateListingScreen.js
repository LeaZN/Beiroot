import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';

import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import { AntDesign } from '@expo/vector-icons'; 

import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 






const MyListingsScreen = props => {



    const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
      setToggle(!toggle);
 };
 const [toggle1, setToggle1] = useState(true);
 const toggleFunction1 = () => {
   setToggle1(!toggle1);
};
const [toggle2, setToggle2] = useState(true);
const toggleFunction2 = () => {
  setToggle2(!toggle2);
};
const [toggle3, setToggle3] = useState(true);
const toggleFunction3 = () => {
  setToggle3(!toggle3);
};
const [toggle4, setToggle4] = useState(true);
const toggleFunction4 = () => {
  setToggle4(!toggle4);
};
const [toggle5, setToggle5] = useState(true);
const toggleFunction5 = () => {
  setToggle5(!toggle5);
};
const [toggle6, setToggle6] = useState(true);
const toggleFunction6 = () => {
  setToggle6(!toggle6);
};
const [toggle7, setToggle7] = useState(true);
const toggleFunction7 = () => {
  setToggle7(!toggle7);
};



    return (
    
    <ScrollView>
    <View style={styles.createContainer}>

        <Text style={styles.title}>
            What are you offering?
        </Text>

<View style={styles.type}>
<TouchableOpacity onPress={() => toggleFunction()}>
    <Text style={styles.type1}> Entire place </Text>
    <MaterialIcons style={styles.bookmarkIcon} name="done" size={24} color= {toggle ? "transparent" : "rgb(0,100,100)" }/>

</TouchableOpacity>
    
<TouchableOpacity onPress={() => toggleFunction1()}>
<View style={styles.viewTest}>
 <Text style={styles.type1}> Room </Text>
 <MaterialIcons style={styles.bookmarkIcon} name="done" size={24} color= {toggle1 ? "transparent" : "rgb(0,100,100)" }/>
</View>
</TouchableOpacity>


</View>



<View style={styles.location}>
<Entypo name="location-pin" size={24} color="black" />
<TextInput autoCorrect ={false} style={styles.locationInput} value= " Beirut, Lebanon"/>

</View>

<View style={styles.price}>
<Text style={styles.title}> Monthly Rental Rate </Text>

<View style={styles.priceView}>
<TextInput  style={styles.priceInput} value= " 0"/>
<TextInput  style={styles.priceInput2} value= " LBP"/>

</View>

</View>

<View style={styles.uploadPhoto1}>
    <View style={styles.photoContainer}>
    <AntDesign name="home" size={54} color="white" />
    <Ionicons style={styles.addPhoto} name="md-add-circle" size={24} color="black" />  
      </View>
    <View style={styles.photoContainer}>
    <AntDesign name="home" size={54} color="white" />
    <Ionicons style={styles.addPhoto} name="md-add-circle" size={24} color="black" />  
      </View>
    <View style={styles.photoContainer}>
    <AntDesign name="home" size={54} color="white" />
    <Ionicons  style={styles.addPhoto}name="md-add-circle" size={24} color="black" />  
      </View>

</View>

<View style={styles.uploadPhoto2}>
<View style={styles.photoContainer}>
<AntDesign name="home" size={54} color="white" />
<Ionicons style={styles.addPhoto} name="md-add-circle" size={24} color="black" />
</View>
<View style={styles.photoContainer}>
<AntDesign name="home" size={54} color="white" />
<Ionicons style={styles.addPhoto} name="md-add-circle" size={24} color="black" />
</View>
<View style={styles.photoContainer}>
<AntDesign name="home" size={54} color="white" />
<Ionicons style={styles.addPhoto} name="md-add-circle" size={24} color="black" />
</View>


</View>


<View style={styles.bedroomContainer}>

<Text style={styles.title2} > Bedrooms </Text>

<View style={styles.bedroomView}>

<TouchableOpacity onPress={() => toggleFunction3()}>

<Text style={styles.smallTouchables}>
 1 Bedroom
</Text>
<MaterialIcons style={styles.bookmarkIcon2} name="done" size={24} color= {toggle3 ? "transparent" : "rgb(0,100,100)" }/>

</TouchableOpacity>
<Text style={styles.smallTouchables}>
 2 Bedroom
</Text>
<Text style={styles.smallTouchables}>
 3 Bedroom
</Text>
</View>
<View style={styles.bedroomView}>
<Text style={styles.smallTouchables}>
 4 Bedroom
</Text>
<Text style={styles.smallTouchables}>
 5 Bedroom
</Text>
<Text style={styles.smallTouchables}>
  Studio
</Text>

</View>

</View>


<View style={styles.bathroomContainer}>

<Text style={styles.title2}> Bathrooms </Text>

<View style={styles.bathroomView}>


<Text style={styles.smallTouchables}>
1
</Text>

<TouchableOpacity onPress={() => toggleFunction4()}>
<Text style={styles.smallTouchables}>
1.5
</Text>
<MaterialIcons style={styles.bookmarkIcon2} name="done" size={24} color= {toggle4 ? "transparent" : "rgb(0,100,100)" }/>
</TouchableOpacity>
<Text style={styles.smallTouchables}>
2
</Text>

</View>

<View style={styles.bathroomView}>


<Text style={styles.smallTouchables}>
2.5
</Text>
<Text style={styles.smallTouchables}>
3
</Text>
<Text style={styles.smallTouchables}>
3+
</Text>

</View>
    
    
</View>





<View style={styles.bathroomContainer}> 
<Text style={styles.title2}>
    Title
</Text>

<View style={styles.smallTouchables2}>

<TextInput>
    
</TextInput>




</View>
</View>


<View style={styles.bathroomContainer}> 


<Text style={styles.title2}>
    Description
</Text>
<View style={styles.smallTouchables3}> 

<TextInput>

</TextInput>

</View>

</View>


<View style={styles.bedroomContainer}>

<Text style={styles.title2}> Amenities </Text>

<View style={styles.AmenitiesView}>
<TouchableOpacity onPress={() => toggleFunction5()}>
<Text style={styles.smallTouchablesAmenities}>
 Doorman
</Text>
<MaterialIcons style={styles.bookmarkIcon3} name="done" size={24} color= {toggle5 ? "transparent" : "rgb(0,100,100)" }/>
</TouchableOpacity>

<TouchableOpacity onPress={() => toggleFunction6()}>

<Text style={styles.smallTouchablesAmenities}>
Electronic Security</Text>
<MaterialIcons style={styles.bookmarkIcon3} name="done" size={24} color= {toggle6 ? "transparent" : "rgb(0,100,100)" }/>

</TouchableOpacity>
<TouchableOpacity onPress={() => toggleFunction7()}>

<Text style={styles.smallTouchablesAmenities}>
 Elevator
</Text>
<MaterialIcons style={styles.bookmarkIcon3} name="done" size={24} color= {toggle7 ? "transparent" : "rgb(0,100,100)" }/>

</TouchableOpacity>
</View>
<View style={styles.AmenitiesView}>
<Text style={styles.smallTouchablesAmenities}>
 Parking Space
</Text>
<Text style={styles.smallTouchablesAmenities}>
Internet
</Text>
<Text style={styles.smallTouchablesAmenities}>
  Pets Allowed
</Text>


</View>
<View style={styles.AmenitiesView}>

<Text style={styles.smallTouchablesAmenities}>
 Smoking Allowed
</Text>
<Text style={styles.smallTouchablesAmenities}>
 Generator Installed
</Text>
<Text style={styles.smallTouchablesAmenities}>
 Sun Blockers
</Text>
</View>
<View style={styles.AmenitiesView}>
<Text style={styles.smallTouchablesAmenities}>
 Balconies
</Text>
<Text style={styles.smallTouchablesAmenities}>
 LandLine
</Text>
<Text style={styles.smallTouchablesAmenities}>
All Bills Settled
</Text>


</View>

</View>


        <View style={styles.makePublicView}>


        <TouchableOpacity
        style={styles.makePublicButton}
        >
            <Text  style={styles.makePublicButtonText}>
            Publish
            </Text>
        </TouchableOpacity>



        </View>





    </View>

    </ScrollView>
    );
};


const styles = StyleSheet.create ({

    type:{
        flexDirection: 'row',
        
    },
    title:{
        fontSize: 22,
        fontWeight: "bold",
        marginHorizontal: 15,
        marginVertical: 15,

    },
    title2:{
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 15,

    },

    type1:
    
    {

        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 8,
        fontSize: 16,
        height: 50,
        width: 150,
       textAlign: "center",
       paddingTop: 15,
    color: "black",
   
        
    },

    type2:{
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 8,
        fontSize: 16,
        width: 150,
        textAlign: "center",
        paddingTop: 15,

    },


    location:{
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 8,
        fontSize: 16,
        // width: 150,
        padding: 15,
        flexDirection: "row",
        
    },

    locationInput:{
      

    },


    price:{


    },

    priceInput:{
        color: "gray",

       borderBottomWidth: 0.5,
       borderBottomColor: 'gray',
      
       marginHorizontal: 15,
       marginVertical: 8,
       fontSize: 16,
       width: 150,
       paddingBottom: 0,
    //    padding: 15,
    },
    priceInput2:{

       color: "black",

       borderBottomWidth: 0.5,
       borderBottomColor: 'gray',
    //    borderRadius: 10,
       marginHorizontal: 15,
       marginVertical: 8,
       fontSize: 16,
       width: 150,
    //    padding: 15,
       paddingBottom: 5,
    //    textAlign: "center",
    },

    priceView:{

        flexDirection: 'row',
        justifyContent: "space-between",
    },
    uploadPhoto1:{
        flexDirection: "row",
      
        justifyContent: "space-between",
        marginHorizontal: 15,

    },
    uploadPhoto2:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,


    },

    photoContainer:{

        borderRadius: 10,
       
        backgroundColor: "rgb(220,220,220)",
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,

    },
    addPhoto:{


        position: "absolute",
        top: -5,
        right: -5,
    },

bathroomContainer:{
marginHorizontal: 15,
},

bedroomContainer: {
    marginHorizontal: 15,


},
    bedroomView:{

        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,

        

    },
    bathroomView:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,

        
    },

    smallTouchables:{

        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        width: 100,
        height: 40,
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlign: "center",
        paddingTop: 11,
        
        

    },
    smallTouchables2:{

        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        width: 330,
        height: 40,
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlign: "center",
        paddingTop: 11,
        
        

    },
    smallTouchables3:{

        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        width: 330,
        height: 80,
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlign: "center",
        paddingTop: 11,
        
        

    },

    smallTouchablesAmenities:{

        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        width: 100,
        height: 40,
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlign: "center",
        paddingTop: 11,
        fontSize: 12,
    },

    AmenitiesView:{

        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
makePublicView:{

    marginVertical: 25,
    

},

makePublicButton:{

   
    
        alignSelf: 'center', 
        borderRadius: 10,
        margin: 15,
        backgroundColor: "#36454f",
        paddingVertical: 10,
        paddingHorizontal: 12,
        // height: 35,
        width: 330,
    
    
},

makePublicButtonText:{

    fontSize: 16,
    color: "#fff",
  
    alignSelf: "center",
},

viewTest:{

    flexDirection: "row",
},

bookmarkIcon:{
    position: "absolute",
left: 3,
    top: 5,
},
bookmarkIcon2:{
    position: "absolute",
    left: -10,
    top: -5,
    
},
bookmarkIcon3:{
    position: "absolute",
   left: -10,
   top: -5,
}

});


export default MyListingsScreen;