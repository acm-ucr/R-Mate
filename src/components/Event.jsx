import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Event = () => {
  const navigation = useNavigation();
  return (
    <View className="rounded-lg bg-rmate-lightblue p-2 w-5/6 my-1">
      <TouchableOpacity onPress={() => navigation.navigate('EventPage')}>
        <View className="flex flex-row ml-2 w-full">
          <Image source={require('../../assets/resumeWorkShop.png')} className="w-20 h-20 mt-1" />
          <View className="pl-2">
            <Text className="font-poppins-600">Resume Workshop with UBA</Text>
            <Text className="text-rmate-gray font-poppins-400">Apr 13th 8 - 9:30PM</Text>
            <Text className="text-rmate-gray font-poppins-400">East Lothian Galley</Text>
            <View className="flex py-1 items-end">
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
