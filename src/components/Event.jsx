import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Event = () => {
  const navigation = useNavigation();
  const [showHours, setShowHours] = useState(false);
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

      <TouchableOpacity
        onPress={() => {
          setShowHours(!showHours);
        }}
      >
        <View className="flex flex-row items-center bg-rmate-white border-2 border-[#83c959] rounded-full px-3 justify-between">
          <View>
            <Text className="text-[#83c959] font-poppins-300 my-1">Closing Soon</Text>
          </View>
          <View className="">
            <AntDesign name="caretdown" size={10} className="text-[#83c959]" />
          </View>
        </View>
      </TouchableOpacity>
      {showHours && (
        <View>
          <Text>Hello</Text>
        </View>
      )}
    </View>
  );
};

export default Event;
