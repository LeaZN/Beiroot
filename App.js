import 'react-native-gesture-handler';




import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import { createAppContainer } from "react-navigation";
import SearchScreen from './src/screens/SearchScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MyListingsScreen from './src/screens/MyListingsScreen';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import FiltersScreen from './src/screens/FiltersScreen';
import BookmarksScreen from './src/screens/BookmarksScreen';
import MyProfileScreen from './src/screens/MyProfileScreen';
import CreateListingScreen from './src/screens/CreateListingScreen';
import EditProfileScreen from './src/screens/EditProfile';
import MenuScreen from './src/screens/MenuScreen';








import { Entypo } from '@expo/vector-icons'; 


const navigator = createStackNavigator ({

  // Search: SearchScreen,

Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerShown: false,
    }
  },

  SignUp: SignUpScreen,


  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  // SignIn: SignInScreen,
  Profile: ProfileScreen,
  MyListings: MyListingsScreen,
  ListingDetails: ListingDetailsScreen,
  Filters: FiltersScreen,
  Bookmarks: BookmarksScreen,
  Create: CreateListingScreen,
  MyProfile: MyProfileScreen,
  EditProfile:  EditProfileScreen,
  Menu: MenuScreen,

},{

  initialRouteName: 'SignIn',
  defaultNavigationOptions: {

    title: 'Beiroot',

  }

});


export default createAppContainer(navigator);