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
        <View className="flex flex-row items-center bg-rmate-white border-2 border-[#83c959] rounded-full px-3 justify-between">
          <View>
            <Text className="text-[#83c959] font-poppins-300 my-1">Closing Soon</Text>
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
        <View className="bg-rmate-blue w-full">
          <Text>Hello</Text>
        </View>
      )}
    </View>
  );
};

export default SRCHourButton;
