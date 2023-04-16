import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login.js';
import loading from '../screens/loading.js';
import BottomNavigator from './BottomNavigator.jsx';
import profile from '../screens/profile.js';
const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="Profile" component={profile} options={screenOptions} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={screenOptions} />
      <Stack.Screen name="LoadingScreen" component={loading} options={screenOptions} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={screenOptions} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
