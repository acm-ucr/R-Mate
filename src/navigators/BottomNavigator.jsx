import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../screens/home';
import events from '../screens/events';
import map from '../screens/map';
import surveys from '../screens/surveys';
import BottomBar from '../components/BottomBar';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';

const BottomNavigator = () => {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    headerTitle: (props) => <Text>ucr logo</Text>,
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileInformation')}
        title="Info"
        color="#fff"
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    ),
  };
  return (
    <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
      <Tab.Screen name="home" component={home} options={screenOptions} />
      <Tab.Screen name="events" component={events} options={screenOptions} />
      <Tab.Screen name="map" component={map} options={screenOptions} />
      <Tab.Screen name="survey" component={surveys} options={screenOptions} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
