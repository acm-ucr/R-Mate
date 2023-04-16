import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from '../components/Calendar';
import EventPage from '../components/EventPage';
const eventsStack = createNativeStackNavigator();
const events = () => {
  return (
    <eventsStack.Navigator>
      <eventsStack.Screen name="Calander" component={Calendar} options={{ headerShown: false }} />
      <eventsStack.Screen name="EventPage" component={EventPage} options={{ headerShown: false }} />
    </eventsStack.Navigator>
  );
};

export default events;
