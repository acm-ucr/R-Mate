import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import BottomTabNavigator from './BottomNavigator.jsx';
import LoginScreen from '../screens/login.js';
import TopNavigator from './TopNavigator.jsx';
const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="TopNavigator" component={TopNavigator} options={screenOptions} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={screenOptions} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
