import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Event = () => {
  const navigation = useNavigation();
  return (
    <View className="rounded-xl bg-red-500">
      <TouchableOpacity onPress={() => navigation.navigate('EventPage')}>
        <View className="flex flex-row">
          <Image source={require('../../assets/resumeWorkShop.png')} className="flex w-10 h-10 items-center" />
          <View className="">
            <Text className="font-poppins-600">Resume Workshop with UBA</Text>
            <Text className="text-rmate-gray">Apr 13th 8 - 9:30PM</Text>
            <Text className="text-rmate-gray">East Lothian Galley</Text>
            <View className="flex bg-rmate-blue rounded-xl items-center">
              <Text className="text-rmate-white">details</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Event;
