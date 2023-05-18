import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const SRCButton = () => {
  return (
    <View className="w-full flex flex-row">
      <TouchableOpacity className="rounded-xl">
        <Text className="bg-rmate-midblue text-rmate-white font-poppins-400 text-xl pt-2 pl-2 pb-2 pr-2">
          <Text>Today's Schedule </Text>
          <AntDesign name="right" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SRCButton;
