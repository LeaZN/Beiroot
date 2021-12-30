import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Listing_Bookmarks from '../components/Listing_Bookmarks';


const BookmarksScreen = () => {


    return <View>
        <ScrollView>
       <Listing_Bookmarks/>
       </ScrollView>
    </View>
};


const styles = StyleSheet.create ({



});


export default BookmarksScreen;