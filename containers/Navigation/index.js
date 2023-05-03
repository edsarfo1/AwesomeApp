import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import UserInfo from '../UserInfo';
import FlatListDemo from '../FlatListDemo';
import Image from '../FastImage';
import UserDetailsFunct from '../UserDetailsFunct';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="User Info" component={UserInfo} />
//     </Tab.Navigator>
//   );
// }

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Image" component={Image} />
        <Stack.Screen name="Personal Info" component={UserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
// export default MyTabs;
