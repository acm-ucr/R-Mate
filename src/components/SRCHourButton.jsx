import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

const SRCHourButton = () => {
  const [showHours, setShowHours] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getHours());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log(currentTime);
  // let style = '';
  // let text = '';

  // switch () {
  //   case 'open':
  //     style = 'bg-green-500 text-white';
  //     text = 'Open';
  //   case 'closing soon':
  //     style = 'bg-yellow-500 text-white';
  //     text = 'Closing Soon';
  //   case 'closed':
  //     style = 'bg-red-500 text-white';
  //     text = 'Closed';
  //   default:
  //     style = '';
  //     text = '';
  // }

  return (
    <View className="rounded-lg">
      <TouchableOpacity
        onPress={() => {
          setShowHours(!showHours);
        }}
      >
        <View className="flex flex-row items-center bg-rmate-white border-2 border-[#83c959] rounded-full px-2 justify-between w-1/3">
          <Text className="text-[#83c959] font-poppins-500 my-1">Closing Soon</Text>
          <View className="">
            {showHours ? (
              <AntDesign name="caretdown" size={10} />
            ) : (
              <AntDesign name="caretup" size={10} />
            )}
          </View>
        </View>
      </TouchableOpacity>

      {showHours && (
        <View className="bg-rmate-blue w-11/12 rounded-md p-3">
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-700 text-xl">Daily Hours</Text>
            <View className="flex flex-row bg-rmate-yellow rounded-full items-center justify-between px-2">
              <Text className="text-rmate-white font-poppins-500 text-xs my-0.5 pr-2">
                All SRC Hours
              </Text>
              <AntDesign name="clockcircle" size={12} color="white" />
            </View>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Monday</Text>
            <Text className="text-rmate-white font-poppins-600">6:30am - 11pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Tuesday</Text>
            <Text className="text-rmate-white font-poppins-600">6:30am - 11pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Wednesday</Text>
            <Text className="text-rmate-white font-poppins-600">6:30am - 11pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Thursday</Text>
            <Text className="text-rmate-white font-poppins-600">6:30am - 11pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Friday</Text>
            <Text className="text-rmate-white font-poppins-600">6:30am - 11pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Saturday</Text>
            <Text className="text-rmate-white font-poppins-600">3pm - 7pm</Text>
          </View>
          <View className="flex flex-row justify-between py-1">
            <Text className="text-rmate-white font-poppins-600">Sunday</Text>
            <Text className="text-rmate-white font-poppins-600">3pm - 11pm</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default SRCHourButton;
