import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import BottomNavigator from './BottomNavigator';
import profile from '../screens/profile';
import TopBar from '../components/TopBar';
const screenOptions = {
  headerShown: false,
};

const Tab = createMaterialTopTabNavigator();
const TopNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TopBar {...props} />}>
      <Tab.Screen name="BottomNavigator" component={BottomNavigator} options={screenOptions} />
      <Tab.Screen name="profileScreen" component={profile} options={screenOptions} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
