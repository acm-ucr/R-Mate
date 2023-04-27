import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Event = () => {
  const navigation = useNavigation();
  return (
    <View className="rounded-xl bg-red-500 p-1">
      <TouchableOpacity onPress={() => navigation.navigate('EventPage')}>
        <View className="flex flex-row ml-2">
          <Image source={require('../../assets/resumeWorkShop.png')} className="w-20 h-20 " />
          <View className="pl-5">
            <Text className="font-poppins-600">Resume Workshop with UBA</Text>
            <Text className="text-rmate-gray font-poppins-300">Apr 13th 8 - 9:30PM</Text>
            <Text className="text-rmate-gray">East Lothian Galley</Text>
            <View className="flex items-center">
              <View className="bg-rmate-blue rounded-full px-3">
                <Text className="text-rmate-white font-poppins-300 my-0.5">details</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Event;
