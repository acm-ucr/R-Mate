import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Event = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('EventPage')}>
        <View>
          <Image source={'../assets/resumeWorkShop.png'} className="w-10"/>
          <Text className="bg-red-500">Resume Workshop with UBA</Text>
          <Text>Apr 13th 8 - 9:30PM</Text>
          <Text className="text-rmate-gray">East Lothian Galley</Text>
          <Text className="text-rmate-white">details</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Event;
