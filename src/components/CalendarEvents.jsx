import { View, Text } from 'react-native';
import React from 'react';
import Events from './Events';
import { Calendar } from 'react-native-calendars';

const CalendarEvents = () => {

  return (
    <View>
      <Text>Caledar</Text>
      <Calendar/>
      <Events />
    </View>
  );
};

export default CalendarEvents;
