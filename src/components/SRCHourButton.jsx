import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const SRCHourButton = ({ status }) => {
  const [showHours, setShowHours] = useState(false);

  // let style = '';
  // let text = '';

  // switch (status) {
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
          <View>
            <Text className="text-[#83c959] font-poppins-500 my-1">Closing Soon</Text>
          </View>
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
        <View className="bg-rmate-blue w-11/12 rounded-md p-6">
          <View className="flex flex-row justify-between">
            <Text className="text-rmate-white font-poppins-600">Daily Hours</Text>
            <View className="flex flex-row bg-rmate-yellow rounded-full justify-between items-center">
              <Text className="text-rmate-white font-poppins-300 my-0.5 px-2">All SRC Hours</Text>
              <AntDesign name="clockcircle" size={12} color="white" />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default SRCHourButton;
