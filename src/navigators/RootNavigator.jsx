import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login.js';
import TopNavigator from './TopNavigator.jsx';
import loading from '../screens/loading.js';
const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="TopNavigator" component={TopNavigator} options={screenOptions} />
      <Stack.Screen name="LoadingScreen" component={loading} options={screenOptions} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={screenOptions} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
