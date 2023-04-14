import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import home from '../screens/home';
import events from '../screens/events';
import map from '../screens/map';
import surveys from '../screens/surveys';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'events') {
            iconName = focused ? 'calendar' : 'calendar';
          } else if (route.name === 'posts') {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'map') {
            iconName = focused ? 'ios-map' : 'ios-map-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'survey') {
            iconName = focused ? 'form' : 'form';
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#DE783F',
        tabBarInactiveTintColor: '#28304E',
      })}
    >
      <Tab.Screen name="home" component={home} options={{ headerShown: false }} />
      <Tab.Screen name="events" component={events} options={{ headerShown: false }} />
      <Tab.Screen name="map" component={map} options={{ headerShown: false }} />
      <Tab.Screen name="survey" component={surveys} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
