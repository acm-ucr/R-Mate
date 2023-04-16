import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Event = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('EventPage')}>
        <Text className="bg-red-500">Event</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Event;
