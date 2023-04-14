import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import BottomNavigator from './BottomNavigator';
import profile from '../screens/profile';
import { Text } from 'react-native';
const screenOptions = {
  headerShown: false,
};

const Tab = createMaterialTopTabNavigator();
const TopNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'BottomNavigator') {
            return <Text>LOGO</Text>;
          }
          if (route.name === 'profileScreen') {
            return <Text>Profile</Text>;
          }
        },
      })}
    >
      <Tab.Screen name="BottomNavigator" component={BottomNavigator} options={screenOptions} />
      <Tab.Screen name="profileScreen" component={profile} options={screenOptions} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
