import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarEvents from '../components/CalendarEvents';
import EventPage from '../components/EventPage';
const eventsStack = createNativeStackNavigator();
const events = () => {
  return (
    <eventsStack.Navigator>
      <eventsStack.Screen
        name="Calander"
        component={CalendarEvents}
        options={{ headerShown: false }}
      />
      <eventsStack.Screen name="EventPage" component={EventPage} options={{ headerShown: false }} />
    </eventsStack.Navigator>
  );
};

export default events;
